import React from 'react';

import Day from './Day/Day';

import './Week.css';

const Week = props => {
    const week = [];
    let day = props.start;

    for(let i = 0; i <= 6; i++) {
        if(i < props.startWeekDay) {
            week.push(<Day key={i} empty></Day>);
            continue;
        }
            
        if(day <= props.end)
            week.push(<Day key={i} clicked={props.dayClicked} mood={null}>{day}</Day>);
        else
            week.push(<Day key={i} empty></Day>);
        
        day++;
    }

    return <div className="Week">
        {week.map(day => day)}
    </div>
};

export default Week;