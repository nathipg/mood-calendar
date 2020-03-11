import React from 'react';

import Week from './Week/Week';

import './Month.css';

const Month = props => {
    const monthsName = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const monthStart = new Date(props.year, props.month, 1);
    const monthEnd = new Date(props.year, props.month + 1, 0).getDate();
    let weekEnd = 7 - monthStart.getDay();

    const weeks = [
        <Week key={1} startWeekDay={monthStart.getDay()} start={1} end={weekEnd} />
    ];

    do {
        weekEnd = weekEnd + 7;
        weeks.push(<Week key={weekEnd - 6} startWeekDay={0} start={weekEnd - 6} end={weekEnd > monthEnd ? monthEnd : weekEnd} />);
    } while(weekEnd < monthEnd);

    return <div className="Month">
        <h2>{monthsName[monthStart.getMonth()]}</h2>
        <div className="week-days-labels">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
        </div>
        {weeks.map(week => week)}
    </div>;
};

export default Month;