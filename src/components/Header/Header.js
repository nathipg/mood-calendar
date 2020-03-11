import React from 'react';

import Moods from '../Moods/Moods';

import './Header.css';

const Header = props => {
    return (
        <div className="Header">
            <h1>2020 Mood Calendar</h1>
            <p className="title-caption">~ color each day depending on what your mood was / is ~</p>
            <p>Select mood:</p>
            <Moods selected={props.mood} clicked={(n) => props.moodClick(n)} />
            <p>then click on the circles below</p>
        </div>
    );
};

export default Header;