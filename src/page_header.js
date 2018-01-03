import React from "react";
import PropTypes from "prop-types";
import style from "./App.css";

class PageHeader extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string
    };

    static defaultProps = {
        title: ""
    };

    render() {
        const {title} = this.props;
        return (
            <div className={style.pageHeader}>
                <div className={style.pageTitle}>
                    {title}
                </div>
            </div>
        );
    }
}

export default PageHeader;
