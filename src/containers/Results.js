import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from 'moment';
import * as DEF from '../constants/defines';

class Results extends Component {
    render() {
        const {app, string: {length}} = this.props;
        const summary = DEF.STRING_LENGTH;

        return (
            <div className="results row">
                {app.appState === DEF.STATE_2 && <div className="result-item">{`Осталось времени: ${moment.utc(app.time_left*1000).format('mm:ss')}`}</div>}
                <div className="result-item">{`Прошло времени: ${moment.utc(app.time_spent*1000).format('mm:ss')}`}</div>
                <div className="result-item">{`Количество ошибок: ${app.errors}`}</div>
                 <div className="result-item">{`Осталось символов: ${length}`}</div>
                {app.appState === DEF.STATE_3 && <div className="result-item">{`Общее количество символов: ${summary}`}</div>}
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        app: state.app,
        string: state.string
    }
};

export default connect(
    mapStateToProps
)(Results);