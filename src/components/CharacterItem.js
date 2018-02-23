import React from 'react';

const CharacterItem = ({item, markedErrorCurrent, isCurrent}) => (
    <div className={"character-item" + (isCurrent && markedErrorCurrent ? " marked" : "")}>{item}</div>
);

export default CharacterItem;