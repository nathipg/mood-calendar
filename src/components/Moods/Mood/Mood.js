import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faSmile, faMeh, faFrown, faSadTear } from "@fortawesome/free-solid-svg-icons";

import './Mood.css';

const Mood = props => {
    let faIcon = null;
    let faColor = null;
    let style = null;

    switch(parseInt(props.n)) {
        case 1:
            faColor = 'rgb(45, 107, 95)';
            faIcon = faLaugh;
            break;
        case 2:
            faColor = 'rgb(114, 227, 166)';
            faIcon = faSmile;
            break;
        case 3:
            faColor = 'rgb(223, 244, 199)';
            faIcon = faMeh;
            break;
        case 4:
            faColor = 'rgb(237, 191, 152)';
            faIcon = faFrown;
            break;
        case 5:
            faColor = 'rgb(234, 61, 54)';
            faIcon = faSadTear;
            break;
        default:
            break;
    }

    if(!faIcon)
        return null;

    if(props.selected) {
        style = {
            borderRadius: '1rem',
            padding: '0.25rem',
            backgroundColor: faColor,
            color: 'white'
        }
    } else {
        style = {
            color: faColor
        }
    }

    return <button className="Mood" onClick={props.clicked}>
        <FontAwesomeIcon style={style} icon={faIcon} size="2x" />
    </button>;
};

export default Mood;