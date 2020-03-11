import React from 'react';

import Month from './Month/Month';

import './Calendar.css';

const Calendar = props => {
    const months = [];

    for(let i = 0; i < 12; i++) {
        months.push(<Month daysMoods={props.daysMoods} key={i} year={props.year} month={i} dayClicked={props.dayClicked} />);
    }

    return <div className="Calendar">
        {months}
    </div>;
};

export default Calendar;