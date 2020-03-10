import React from 'react';

import Mood from './Mood/Mood';

import './Moods.css'

const Moods = props => {
    const moodList = [1, 2, 3, 4, 5];

    return <div className="Moods">
        {moodList.map(n => <Mood selected={props.selected === n} key={n} n={n} clicked={() => props.clicked(n)} />)}
    </div>;
};

export default Moods;