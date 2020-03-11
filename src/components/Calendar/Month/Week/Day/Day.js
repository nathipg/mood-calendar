import React from 'react';

import './Day.css';

const Day = props => {
    const classes = ['Day'];

    if(props.mood)
        classes.push('mood-' + props.mood);

    if(props.empty)
        classes.push('empty');

    return <div className={classes.join(' ')} onClick={props.clicked}>
        <span>{props.children}</span>
    </div>;
};

export default Day;