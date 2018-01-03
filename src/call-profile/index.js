import React from "react";
import {find, maxBy, sortBy, toArray, filter, capitalize} from "lodash";
import moment from 'moment';
import style from "./style.css";
import WaveForm from "../waveform/waveform";
import Timelines from "../timelines/timelines";
import {UNKNOWN_EMOTION_COLOR, getEmotionAttrs} from "./emotions"
import keywordDict from "./keywords"
import criteriaDict from "./criteria"
import {debounce} from "../utils"
import PageHeader from "../page_header"


class CallProfilePage extends React.PureComponent {

    state = {
        profileImproved: null,
        redraw: false,
        timelines: null,
        regions: null,
        duration: null,
        playProgress: null,
        eventTableData: null,
        eventTableCurEvent: null,
        speakerResults: null
    };

    componentWillMount() {
        window.addEventListener('resize', this.resize);

        const task = this.props.task;

        const profile = task.profile;
        const crits = task.criterias;

        // Profile: sort episode emotion by probability desc
        const profileImproved = {...profile};
        profileImproved.conversations.forEach(conv => {
            conv.episodes.forEach(epi => {
                const emotions = this.getEpisodeEmotions(epi);
                if (emotions.length > 0) {
                    const sortedEvents = sortBy(emotions, 'probability').reverse();
                    this.setEpisodeEmotions(epi, sortedEvents);
                }
            });
        });

        const timelines = this.createTimelinesData(profileImproved);
        const regions = this.createRegions(profile);
        const keyworkTimelineData = find(timelines, ['label', 'События']);
        if (!keyworkTimelineData) {
            throw new Error("The keyword timeline's data were not found");
        }
        const eventTableData = this.createEventTableData(crits, keyworkTimelineData);
        const speakerResults = this.createSpeakerResults(profileImproved);

        this.setState({
            timelines,
            regions,
            profileImproved,
            eventTableData,
            speakerResults
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    render() {
        const loading = false;
        const media = this.props.media;
        const {timelines, regions, redraw, playProgress, duration, profileImproved, eventTableData,
            eventTableCurEvent, speakerResults} = this.state;

        return (
            <div className={style.page}>
                {/* Header */}
                <PageHeader title={`Звонок "${media.originalName}"`}/>

                {/* Waveform */}
                <div className={style.waveformContainer}>
                    {redraw ? null :
                        <WaveForm src={media.url} title={media.originalName} regions={regions}
                                  onPlayProgress={this.onPlayProgress}
                                  reportDuration={this.onGetDuration}
                                  ref={instance => {
                                      this.waveform = instance;
                                  }}/>
                    }
                </div>

                {media.url && duration !== null && !loading && !profileImproved ?
                    <div className={style.analysisIsInProgress}>Выполняется анализ аудио-файла...</div>
                    : null
                }

                {/* Timelines */}
                <div className={style.timelinesWrapper}>
                    {redraw || !timelines ? null :
                        <Timelines datum={timelines}
                                   onItemClick={this.onTimelineItemClick}
                                   duration={duration}
                                   playProgress={playProgress}>
                        </Timelines>
                    }
                </div>

                <div className={style.flexRow}>
                    {/* Events Table */}
                    {!redraw && eventTableData && eventTableData.length > 0 ? (
                        <div className={style.eventTableWrapper}>
                            <table className={`${style.eventsTable} ${style["minimal-table"]}`}>
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {eventTableData.map((event, eventInd) => {
                                    const tableRowClass = event.items.length > 0 ? 'success' : 'warning';
                                    const clickableRowClass = style["events-table-row-clickable"];
                                    const selectedRowClass = event === eventTableCurEvent ?
                                        style["events-table-row-selected"] : '';
                                    return (
                                        <tr key={`event_${eventInd}`}
                                            className={`${tableRowClass} ${clickableRowClass} ${style["events-table-row"]}
                                        ${selectedRowClass}`}
                                            onClick={this.onEventClick.bind(this, event, duration === null)}>
                                            <td className={style.eventName}>{`${event.name}`}</td>
                                            <td>{event.items.length > 0 ?
                                                <span className={`fa fa-arrow-right`}></span> :
                                                <span className={`fa fa-minus`}></span>}
                                            </td>
                                            <td style={{'textAlign': 'right'}}>
                                                {this.renderEventPlayButton(event, duration === null)}
                                            </td>
                                        </tr>
                                    );
                                })}

                                </tbody>
                            </table>
                        </div>
                    ) : null}

                    {/* Speaker Results or Criteria Table */}
                    {!redraw && speakerResults && speakerResults.length > 0 ? (
                        <div className={style.speakerResultTableWrapper}>
                            {speakerResults.map((convResults, convInd) => {
                                const speakers = convResults.speakers;
                                const criteria = convResults.criteria;
                                const results = convResults.results;
                                return (
                                    <table className={`${style["minimal-table"]} ${style.speakerResultsTable}`} key={`conversation_${convInd}_results`}>
                                        <thead>
                                        <tr>
                                            <th></th>
                                            {speakers.map((sp, spInd) => {
                                                return (
                                                    <th key={`speaker_name_${spInd}`}
                                                        className={style.speakerResult}>
                                                        {`${sp}`}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {criteria.map((crit, critInd) => {
                                            return (
                                                <tr key={`conv_${convInd}_criterion_${critInd}`}>
                                                    <td className={style.criterionNames}>{`${crit}`}</td>
                                                    {speakers.map((speakerName, speakerNameInd) => {
                                                        return (
                                                            <td key={`conv_${convInd}_criterion_${critInd}_speaker_${speakerNameInd}`}
                                                                className={style.speakerResult}>
                                                                {this.renderSpeakerResult(this.getSpeakerResult(results, speakerName, crit))}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                );
                            })}
                        </div>
                    ) : null}

                    {!redraw && profileImproved && (!speakerResults || speakerResults.length === 0) ?
                        (<div className={style.missingCriteria}>Отсутствует информация по критериям оценки</div>)
                        : null}

                </div>
            </div>
        );
    }

    resize =
        debounce(() => {
            this.setState({
                redraw: true
            });

            setTimeout(() => {
                this.setState({
                    redraw: false
                });
            }, 100);
        }, 500);

    hexToRgbA(hex, alpha = 1) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    }

    createRegions(profile) {
        let regions = [];

        profile.conversations.forEach(conv => {
            const convRegions = conv.episodes.map((e, i) => {
                // Get emotion events
                const emoEvents = this.getEpisodeEmotions(e);

                let regionColor = 'rgba(100, 100, 100, 0.5)';
                if (emoEvents.length > 1) {
                    // Find the most probable emotion
                    const mostProbEmo = maxBy(emoEvents, 'probability');
                    const emoAttrs = getEmotionAttrs(mostProbEmo.name);
                    regionColor = this.hexToRgbA(emoAttrs.color, 0.5)
                }
                else {
                    regionColor = this.hexToRgbA(UNKNOWN_EMOTION_COLOR, 0.5)
                }

                return {
                    start: e.bound.left / 1000,
                    end: e.bound.right / 1000,
                    color: regionColor,
                    episodeID: i
                };
            });

            regions = regions.concat(convRegions);
        });

        return regions;
    }

    createTimelinesData(improvedProfile) {
        if (!improvedProfile || !improvedProfile.conversations) {
            return [];
        }

        const keywordTimes = this.createKeywordTimes(improvedProfile);
        const speakerTimelines = this.createSpeakerTimelines(improvedProfile);

        // Prepare d3-timelines datum to return
        let data = [
            {
                label: "События",
                times: keywordTimes
            }
        ];
        if (speakerTimelines.length > 0) {
            data = data.concat(speakerTimelines);
        }

        return data;
    }

    createKeywordTimes(improvedProfile) {
        // Get keyword timeline data
        const keywordTimelineItems = [];
        let nextKeyworkInd = 0;
        improvedProfile.conversations.forEach(conversation => {
            conversation.episodes.forEach(epi => {
                const keywords = this.getEpisodeKeywords(epi);
                keywords.forEach(kw => {
                    if (!kw.extra || !kw.extra.bound || !kw.extra.bound.left || !kw.extra.bound.right) {
                        return;
                    }

                    const kwAttrs = keywordDict(kw.name);

                    keywordTimelineItems.push({
                        starting_time: kw.extra.bound.left,
                        ending_time: kw.extra.bound.right,
                        color: kwAttrs.color,
                        display: 'circle',
                        timeline: "keywords",
                        keyword: kw.name,
                        tooltipAddition: `Событие: ${kwAttrs.name}</br>Вероятность: ${kw.probability.toFixed(2)}</br>`,
                        id: `keyword_${nextKeyworkInd}`
                    });

                    nextKeyworkInd += 1;
                });
            });
        });

        return keywordTimelineItems;
    }

    createSpeakerTimelines(improvedProfile) {
        let timelines = [];

        const sexVariants = {
            male: 'мужской',
            female: 'женский'
        };

        improvedProfile.conversations.forEach((conv, convInd) => {
            const speakers = this.getSpeakers(conv);

            conv.episodes.forEach((epi, epiInd) => {
                const epiSpeakerName = epi.speaker;
                if (!epiSpeakerName) {
                    return;
                }

                let speakerTimeline = find(timelines, ['label', epiSpeakerName]);
                if (!speakerTimeline) {
                    speakerTimeline = {
                        label: epiSpeakerName,
                        times: []
                    };
                    timelines.push(speakerTimeline);
                }

                const timelineItem = {
                    starting_time: epi.bound.left,
                    ending_time: epi.bound.right,
                    id: `speaker_conversation_${convInd}_episode_${epiInd}`
                };

                timelineItem.tooltipAddition = '';
                const speaker = this.findSpeakerByName(speakers, epiSpeakerName);
                if (speaker) {
                    const gender = speaker.gender ? speaker.gender.gender : null;
                    const sex = gender && sexVariants[gender] ? sexVariants[gender] : 'не известен';
                    timelineItem.tooltipAddition +=
                        `Пол: ${sex}</br>`
                }

                const emoEvents = this.getEpisodeEmotions(epi);
                if (emoEvents.length > 0) { // if emotions found
                    // Find the most probable emotion
                    // const mostProbEmo = maxBy(emoEvents, 'probability');
                    // We already have the improved profile where the emotions are sorted.
                    const mostProbEmo = emoEvents[0];

                    const emoAttrs = getEmotionAttrs(mostProbEmo.name);

                    timelineItem.color = this.hexToRgbA(emoAttrs.color, 0.5);
                    timelineItem.tooltipAddition +=
                        `Эмоция: ${emoAttrs.name}</br>Вероятность: ${mostProbEmo.probability.toFixed(2)}</br>`
                }
                else {
                    timelineItem.color = this.hexToRgbA(UNKNOWN_EMOTION_COLOR, 0.5);
                }

                speakerTimeline.times.push(timelineItem);
            });
        });

        return timelines;
    }

    createEventTableData(criteria, keywordTimeline) {
        if (!criteria || !Array.isArray(criteria)) {
            return [];
        }
        const timelineItems = keywordTimeline.times || [];
        const data = [];
        criteria.forEach(crit => {
            if (crit.type !== 'KEYWORD') {
                return;
            }
            const keyword = crit.title;
            const keywordDispName = capitalize(keywordDict(keyword).name);
            const keywordTimelineItems = filter(timelineItems, ['keyword', keyword]);
            const keywordTableItems = keywordTimelineItems.map(tlItem => {
               return {
                   start: tlItem.starting_time / 1000,
                   end: tlItem.ending_time / 1000
               };
            });

            data.push({
                name: keywordDispName,
                items: keywordTableItems
            });
        });

        return data;
    }

    createSpeakerResults(profile) {
        // Returns an array. Each array item corresponds to particular conversation.
        // Returns [{
        //      results - see description below
        //      speakers - list of speaker names
        //      criteria - list of criterion names
        // }]
        // "results" === speaker -> [ {name, value} ].
        // name - criterion name
        // value - result
        // expected - expected result
        const results = [];
        const TOTAL_RESULT_CRITERION = 'Итоговая оценка';

        const convs = profile.conversations;
        if (!convs) {
            return results;
        }

        convs.forEach(conv => {
            const convResults = {};

            const speakers = this.getSpeakers(conv);
            const speakerNames = speakers.map(sp => this.getSpeakerName(sp));
            convResults.speakers = speakerNames;

            convResults.results = {};
            convResults.criteria = [];

            speakers.forEach(speaker => {
                const speakerName = this.getSpeakerName(speaker);
                if (!speakerName) {
                    return;
                }

                let speakerResults = [];
                const speakerRawResults = speaker.criteriaCompliance;
                if (speakerRawResults) {
                    speakerResults = speakerRawResults.map(rawResult => {
                        const critInfo = criteriaDict(rawResult.criterion);
                        const name = critInfo.name;
                        if (!convResults.criteria.includes(name)) {
                            convResults.criteria.push(name);
                        }
                        const value = rawResult.result;
                        const expected = critInfo.expected;
                        return {name, value, expected};
                    });
                }
                if (speaker.totalEstimation !== undefined && speaker.totalEstimation !== null) {
                    speakerResults.push({
                        name: TOTAL_RESULT_CRITERION,
                        value: speaker.totalEstimation
                    });

                    if (!convResults.criteria.includes(TOTAL_RESULT_CRITERION)) {
                        convResults.criteria.push(TOTAL_RESULT_CRITERION);
                    }
                }

                if (speakerResults.length > 0) {
                    convResults.results[speakerName] = speakerResults;
                }
            });

            if (toArray(convResults.results).length > 0) {
                results.push(convResults);
            }
        });

        return results;
    }

    getSpeakerResult(results, speaker, criterion) {
        const speakerResults = results[speaker];
        if (!speakerResults) {
            return;
        }

        const found = find(speakerResults, ['name', criterion]);
        return found ? found : null;
    }

    getSpeakerName(speakerNode) {
        return speakerNode && speakerNode.identification && speakerNode.identification.speaker ?
            speakerNode.identification.speaker : null;
    }

    getEpisodeEmotions(episode) {
        return episode.attributes && episode.attributes.EMOTION ? episode.attributes.EMOTION : [];
    }

    setEpisodeEmotions(episode, emotions) {
        return episode.attributes.EMOTION = emotions;
    }

    getEpisodeKeywords(episode) {
        return episode.attributes && episode.attributes.KEYWORD ? episode.attributes.KEYWORD : [];
    }

    getSpeakers(conversation) {
        return toArray(conversation.speakers);
    }

    getAllSpeakers(profile) {
        if (!profile || !Array.isArray(profile.conversations)) {
            return [];
        }

        let speakers = [];
        profile.conversations.forEach(conv => {
            const convSpeakers = this.getSpeakers(conv);
            if (Array.isArray(convSpeakers) && convSpeakers.length > 0) {
                speakers = speakers.concat(convSpeakers);
            }
        });

        return speakers;
    }

    findSpeakerByName(speakers, name) {
        return find(speakers, sp => {
            return sp.identification && sp.identification.speaker === name;
        });
    }

    onTimelineItemClick = (item) => {
        this.waveform.play(item.starting_time / 1000, item.ending_time / 1000);
    };

    playEventTableItem(event, item, e){
        e.preventDefault();
        e.stopPropagation();

        // Select the row
        this.setState({
            eventTableCurEvent: event
        });

        this.waveform.play(item.start, item.end);
    }

    onEventClick(event, ignore, e) {
        e.preventDefault();

        // Select the row
        this.setState({
            eventTableCurEvent: event
        });

        if (!ignore && event.items.length > 0) {
            // Move the waveform to 1st event's position
            this.waveform.seekTo(event.items[0].start);
        }
    };

    onGetDuration = (duration) => {
        this.setState({
            duration
        });
    };

    prevPlayProgressDt = null;
    onPlayProgress = (time) => {
        const curDt = new Date().getTime();
        if (this.prevPlayProgressDt === null || curDt - this.prevPlayProgressDt >= 500) {
            this.setState({
                playProgress: time
            });

            this.prevPlayProgressDt = curDt;
        }
    };

    renderEventPlayButton = (event, disabled) => {
        if (event.items.length === 1) {
            return (
                <button className="btn btn-success btn-xs" disabled={disabled}
                        onClick={this.playEventTableItem.bind(this, event, event.items[0])}>
                    <i className="fa fa-play"></i>
                </button>
            );
        }
        else if (event.items.length > 1) {
            const dtFrmt = "mm:ss";
            return (
                <div className="btn-group">
                    <button type="button" className="btn btn-success btn-xs dropdown-toggle" data-toggle="dropdown"
                            disabled={disabled}>
                        {event.items.length}&nbsp;&nbsp;
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                        {event.items.map((slot, index) => (
                                <li key={index} onClick={this.playEventTableItem.bind(this, event, slot)}>
                                    <a href="">
                                        <i className="fa fa-play btn btn-success btn-xs"></i>&nbsp;
                                        {moment(slot.start * 1000).format(dtFrmt)} - {moment(slot.end * 1000).format(dtFrmt)}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            );
        }
        else {
            return null;
        }
    };

    renderSpeakerResult = (result) => {
        if (!result) {
            return <span className="fa fa-minus"></span>;
        }
        const value = result.value;
        if (typeof value === 'boolean') {
            const expected = result.expected;
            const colorCls = value === expected ? style.resultGood : style.resultBad;
            const iconCls = value === expected ? 'check' : 'times';
            return (<span className={`${colorCls} fa fa-${iconCls}`}></span>);
        }
        else {
            return (
                <span>{value}</span>
            );
        }
    };

} // component class

export default CallProfilePage;
