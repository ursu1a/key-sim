/**
 * Created by Анжелика on 13.11.2017.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import CharacterItem from '../components/CharacterItem';

class CharacterData extends Component {
    render() {
        const {string: {string, markedErrorCurrent}} = this.props;
        const charactersList = string.split('');
        return(
            <div className="characters-list row" title="Нажмите на клавиатуре первый символ">
                {charactersList.map((item, index) => (
                    <CharacterItem key={index} item={item} markedErrorCurrent={markedErrorCurrent} isCurrent={index === 0} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        string: state.string
    }
};

export default connect(
    mapStateToProps
)(CharacterData);