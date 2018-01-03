import React from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js"
import regionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions";
import {uniqueId} from "lodash";
import style from "./waveform.css";

class WaveForm extends React.PureComponent {

    static propTypes = {
        src: PropTypes.string.isRequired,
        title: PropTypes.string,
        regions: PropTypes.arrayOf(PropTypes.shape({
            start: PropTypes.number,
            end: PropTypes.number,
            color: PropTypes.string
        })),
        onPlayProgress: PropTypes.func,
        reportDuration: PropTypes.func
    };

    state = {
        play: false,
        time: null,
        loading: true,
        errGetAudio: false
    };

    id = uniqueId("waveform");
    wavesurfer = null;

    play = (start, end) => {
        this.wavesurfer.play(start, end);
    };

    pause = () => {
        this.wavesurfer.pause();
    };

    seekTo = pos => {
        this.wavesurfer.seekTo(pos / this.getDuration());
    };

    getDuration = () => {
        return this.wavesurfer.getDuration();
    };

    componentDidMount() {

        const {src} = this.props;

        this.wavesurfer = WaveSurfer.create({
            container: `#${this.id}`,
            waveColor: 'violet',
            progressColor: 'purple',
            plugins: [
                regionsPlugin.create()
            ]
        });

        this.wavesurfer.on("ready", () => {
            const {regions} = this.props;

            this.onTimeProgress();
            this.setState({
                loading: false
            });

            if (regions) {
                this.makeRegions(regions);
            }

            if (this.props.reportDuration) {
                this.props.reportDuration(this.getDuration());
            }
        });

        this.wavesurfer.on("play", () => {
            this.setState({play: true});
        });
        this.wavesurfer.on("pause", () => {
            this.setState({play: false});
        });

        this.wavesurfer.on("seek", this.onWaveSeek);

        this.wavesurfer.on("audioprocess", this.onTimeProgress);

        this.loadFile(src);
    }

    componentDidUpdate(prevProps) {
        const {regions} = this.props;
        if (regions && prevProps.regions !== regions) {
            this.makeRegions(regions);
        }
    }

    componentWillUnmount() {
        this.wavesurfer.destroy();
    }

    render() {
        const {play, loading, errGetAudio} = this.state;
        const {title, src} = this.props;
        return (
            <div>
                {/* Error message */}
                {errGetAudio ? (<div className={style.errGetAudio}>
                    <div>
                        Ошибка: не удалось загрузить аудио-файл
                    </div>
                </div>) : null}

                {/* Waveform */}
                <div id={this.id} className={style.waveform}>
                    {/* Loading indicator */}
                    {loading ? (<div className={style.loading}>
                        <div>
                            <i className="fa fa-spinner fa-pulse fa-fw"> </i>
                        </div>
                    </div>) : null}
                </div>

                {/* Play and download buttons */}
                <div className={style.waveformPanel}>
                    {/* Play, pause buttons */}
                    {play ? (
                        <button onClick={this.onPause}><i className="fa fa-pause" aria-hidden="true"></i></button>
                    ) : (
                        <button onClick={this.onPlay} disabled={loading || errGetAudio}><i className="fa fa-play" aria-hidden="true">
                        </i></button>
                    )}

                    {/* Download button */}
                    {errGetAudio ? null :
                        <a href={src} title="Скачать" className="btn" download={title}>
                            <i className="fa fa-download" aria-hidden="true"></i>
                        </a>
                    }

                    {/* Cur time pos / total duration */}
                    <span>{this.renderTime()}</span>
                </div>
            </div>
        );
    }

    renderTime() {
        const {time, loading} = this.state;

        if (loading) {
            return (
                <span className={style.disabled}>&mdash;/&mdash;</span>
            );
        }
        return (
            <span>{time}</span>
        );
    }

    static numbertFormat(n) {
        return (n < 10 ? "0" : "") + n.toString();
    }

    static secToTime(sec, showHours) {

        sec = Math.round(sec);
        let result = "";
        if (showHours) {
            const hours = Math.floor(sec / 3600);
            sec = sec % 3600;
            result += hours.toString() + ":";
        }
        const minutes = Math.floor(sec / 60);
        result += WaveForm.numbertFormat(minutes) + ":";
        sec = sec % 60;
        result += WaveForm.numbertFormat(sec);

        return result;
    }

    makeRegions = regions => {

        if (!regions) {
            return;
        }

        this.wavesurfer.clearRegions();

        regions.forEach(region => {
            this.wavesurfer.addRegion({
                start: region.start,
                end: region.end,
                color: region.color,
                drag: false,
                resize: false
            });
        });
    };

    onTimeProgress = (time = 0) => {
        const totalTime = Math.floor(this.wavesurfer.getDuration());

        const showHours = totalTime >= 3600;
        let strTime = `${WaveForm.secToTime(time, showHours)}/${WaveForm.secToTime(totalTime, showHours)}`;
        this.setState({
            time: strTime
        });

        if (this.props.onPlayProgress) {
            this.props.onPlayProgress(time);
        }
    };

    onPlay = () => {
        this.wavesurfer.play();
    };

    onPause = () => {
        this.wavesurfer.pause();
    };

    onWaveSeek = position => {
        const totalTime = this.wavesurfer.getDuration();
        this.onTimeProgress(totalTime * position);
    };

    loadFile = src => {
        // ajax({
        //     method: "GET",
        //     url: src,
        //     withCredentials: true,
        //     responseType: "blob"
        // })
        //     .subscribe(
        //         fileContent => this.wavesurfer.loadBlob(fileContent.response),
        //         (error) => {
        //             this.setState({
        //                 loading: false,
        //                 errGetAudio: true
        //             });
        //         },
        //         () => {
        //             this.setState({
        //                 loading: false
        //             });
        //         }
        //     );
        this.wavesurfer.load(src);
    };

}

export default WaveForm;
