import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as DEF from '../constants/defines';
import * as AppActions from "../actions/app";
import CharacterData from './CharacterData';
import Results from './Results';
import Button from '../components/Button';

class App extends Component {

    componentDidMount() {
        window.addEventListener("keydown", e => this.produceAction(e));
    }

    produceAction(e) {
        const {appActions} = this.props;
        const char = String.fromCharCode(e.keyCode).toLowerCase();
        appActions.produce(char);
    }

    render() {
        const {app: {appState}, appActions} = this.props;
        return (
            <div id="app" className="container">
                {appState !== DEF.STATE_1 &&
                    <div>
                        <Results />
                        {appState === DEF.STATE_2 && <CharacterData />}
                    </div>
                }

                <div className={"controls row " + (appState === DEF.STATE_1 ? " center" : "")}>
                    {appState === DEF.STATE_1 && <Button caption="Старт" addClass="start" onClick={appActions.start} />}
                    {appState === DEF.STATE_2 && <Button caption="Закончить" onClick={appActions.stop} />}
                    {appState === DEF.STATE_3 && <Button caption="Заново" onClick={appActions.repeat} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app
    }
};

const mapDispatchToProps = dispatch => {
    return {
        appActions: bindActionCreators(AppActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
