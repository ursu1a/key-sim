import React from 'react';

const Button = ({caption, addClass, onClick}) => (
    <button className={"control-button " + (addClass ? addClass : "")} onClick={onClick}>{caption}</button>
);

export default Button;
