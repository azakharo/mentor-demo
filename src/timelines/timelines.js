import React from "react";
import {uniqueId, isEqual} from "lodash";
import moment from 'moment';
import * as d3 from 'd3';
import {timelines} from "d3-timelines";
import PropTypes from "prop-types";
import style from "./timelines.css";


class Timelines extends React.PureComponent {

    static propTypes = {
        datum: PropTypes.arrayOf(
            PropTypes.shape({
                "starting_time": PropTypes.number,
                "ending_time": PropTypes.number,
                "label": PropTypes.string,
                "color": PropTypes.string,
                tooltipAddition: PropTypes.string
            })
        ).isRequired,

        onItemClick: PropTypes.func,

        // The following props are necessary to draw the current pos
        duration: PropTypes.number,
        playProgress: PropTypes.number
    };

    divID = uniqueId("Timelines");

    componentDidMount() {
        const {datum, duration} = this.props;
        if (datum && duration) {
            this.createTimelines(datum, duration);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(this.props.duration, nextProps.duration) ||
            !isEqual(this.props.datum, nextProps.datum)) {
            const {datum, duration} = nextProps;
            if (datum && duration) {
                this.createTimelines(datum, duration);
            }
        }

        const duration = nextProps.duration;
        const playProgress = nextProps.playProgress;
        if (duration && (playProgress !== undefined && playProgress !== null)) {
            this.updatePlayProgress(playProgress, duration);
        }
    }

    componentWillUnmount() {
        this.cleanup();
    }

    render() {
        return (
            <div id={`${this.divID}`} className={style.d3timelines}>
            </div>
        );
    }

    createTimelines(data, duration) {
        this.cleanup();
        const {onItemClick} = this.props;

        const maxTime = duration * 1000;
        const ticks = this.calcTicks(0, maxTime);

        const getTooltipHtml = this.getToolipHtml;
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3timelines-tooltip")
            .style("opacity", 0);

        const chart = timelines()
            .stack() // toggles graph stacking
            .beginning(1)
            .ending(maxTime)
            .margin({left: 100, right: 30, top: 0, bottom: 0})
            .showBorderLine()
            .showBorderFormat({marginTop: 25, marginBottom: 25, width: 0.3, color: "#FA9E84"})
            .rowSeparators("#c1fac3")
            .tickFormat({
                format: function (d) {
                    return d3.timeFormat(ticks.format)(d)
                },
                tickTime: ticks.units,
                tickInterval: ticks.interval,
                tickSize: 5
            })
            .click(function (dataItem) {
                if (onItemClick) {
                    onItemClick(dataItem);
                }
            })
            .mouseover(function(d) {
                // Highlight the timeline item
                for (const tag of ['rect', 'circle']) {
                    d3.select(`${tag}#${d.id}`)
                        .style("stroke", "black")
                        .style("stroke-width", "2px");
                }

                tooltip.html(getTooltipHtml(d));

                // Get window width
                const windowW = window.innerWidth;
                let tooltipW = 200;
                const realTooltipW = window.$('body > .d3timelines-tooltip').width();
                if (realTooltipW > tooltipW) {
                    tooltipW = realTooltipW;
                }
                let tooltipX;
                if (d3.event.pageX + tooltipW >= windowW) {
                    tooltipX = windowW - tooltipW - 20;
                }
                else {
                    tooltipX = d3.event.pageX;
                }

                tooltip
                    .style("left", (tooltipX) + "px")
                    .style("top", (d3.event.pageY + 20) + "px");

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 1);
            })
            .mouseout(function(d) {
                // Rem the highlight for the timeline item
                for (const tag of ['rect', 'circle']) {
                    d3.select(`${tag}#${d.id}`)
                        .style("stroke-width", "0px");
                }

                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Set chart height
        // Def item H = 20
        // Def item margin = 5
        // Margin top, botton = 25
        const chartH = data.length * 25 + 50;

        d3.select(`#${this.divID}`).append("svg").attr("width", "100%").attr("height", chartH.toString())
            .datum(data).call(chart);
    }

    calcTicks(minTime, maxTime) {
        const dtMin = moment(minTime);
        const dtMax = moment(maxTime);
        const dtDiffInMinutes = dtMax.diff(dtMin, 'minutes', true);

        if (dtDiffInMinutes <= 1) {
            return {
                format: "%s cек",
                units: d3.timeSeconds,
                interval: 5
            }
        }
        else if (dtDiffInMinutes > 1 && dtDiffInMinutes <= 10) {
            return {
                format: "%M:%S",
                units: d3.timeSeconds,
                interval: 30
            }
        }
        else {
            return {
                format: "%M мин",
                units: d3.timeMinutes,
                interval: 1
            }
        }

    }

    getToolipHtml(dataItem) {
        const dtStart = moment(dataItem.starting_time);
        const dtEnd = moment(dataItem.ending_time);
        const dtFrmt = "mm:ss";

        const duration = moment.duration(dtEnd.diff(dtStart));
        let mins = Math.floor(duration.asMinutes());
        let secs = Math.floor(duration.asSeconds()) - mins * 60;
        if (mins < 10) {
            mins = `0${mins}`;
        }
        if (secs < 10) {
            secs = `0${secs}`;
        }
        const durStr = `${mins}:${secs}`;

        let tooltipHtml = `Начало: ${dtStart.format(dtFrmt)}</br>Конец:&nbsp;&nbsp;${dtEnd.format(dtFrmt)}</br>Длина:&nbsp;&nbsp;${durStr}</br>`;

        const tootipAddiotion = dataItem.tooltipAddition;
        if (tootipAddiotion) {
            tooltipHtml += tootipAddiotion;
        }

        return tooltipHtml;
    }

    progressLine = null;

    updatePlayProgress(playProgress, duration) {
        if (!this.progressLine) {
            this.progressLine = d3.select(`#${this.divID} > svg`).append("line")
                .style("stroke-width", 0.5)
                .style("stroke", "black")
                .style("fill", "none");
        }

        const tlRect = window.$(`#${this.divID} > svg g.container`)[0].getBBox();
        const progressX = tlRect.x + tlRect.width * playProgress / duration;

        this.progressLine
            .attr("x1", progressX)
            .attr("y1", tlRect.y)
            .attr("x2", progressX)
            .attr("y2", tlRect.y + tlRect.height)
    }

    cleanup() {
        // Remove the svg
        window.$(`#${this.divID} > svg`).remove();

        // Remove the tooltip from the body
        window.$('body > .d3timelines-tooltip').remove();
    }
}

export default Timelines;
