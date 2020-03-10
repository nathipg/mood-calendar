import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faSmile, faMeh, faFrown, faSadTear } from "@fortawesome/free-solid-svg-icons";

import './Mood.css';

const Mood = props => {
    const moodNumber = parseInt(props.n);

    if(!moodNumber || moodNumber < 1)
        return null;

    const moodClasses = [];
    const moodIcon = [null, faLaugh, faSmile, faMeh, faFrown, faSadTear];

    moodClasses.push('mood-' + moodNumber);

    if(props.selected)
        moodClasses.push('selected');

    return <button className="Mood" onClick={props.clicked}>
        <FontAwesomeIcon className={moodClasses.join(' ')} icon={moodIcon[moodNumber]} size="2x" />
    </button>;
};

export default Mood;