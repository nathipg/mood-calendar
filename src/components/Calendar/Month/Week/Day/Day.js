import React from 'react';

import './Day.css';

const Day = props => {
    const classes = ['Day'];
    const day = !props.empty ? parseInt(props.children) : null;

    if(props.daysMoods.hasOwnProperty(props.month) && props.daysMoods[props.month].hasOwnProperty(day))
        classes.push('mood-' + props.daysMoods[props.month][day]);

    if(props.empty)
        classes.push('empty');

    return <div className={classes.join(' ')} onClick={() => props.clicked(props.month, day)}>
        <span>{day}</span>
    </div>;
};

export default Day;