import React, { useState } from 'react';

import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';

import './App.css';

function App() {
    const [mood, setMood] = useState(null);
    const [daysMoods, setDaysMoods] = useState({});

    const updateObject = (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties
        };
    };
    
    const moodClick = moodClicked => {
        if(moodClicked === mood)
            setMood(null);
        else
            setMood(moodClicked);
    }

    const changeDayMood = (month, day) => {
        const updatedDay = {
            [day]: mood
        };
        const updatedMonth = updateObject(daysMoods[month], updatedDay);
        const updatedDaysMoods = {
            [month]: updatedMonth
        };
        
        setDaysMoods(updateObject(daysMoods, updatedDaysMoods));
    }

    return (
        <div className="App">
            <Header moodClick={moodClick} mood={mood} />
            <Calendar daysMoods={daysMoods} year="2020" dayClicked={(month, day) => changeDayMood(month, day)} />
        </div>
    );
}

export default App;
