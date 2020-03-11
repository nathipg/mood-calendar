import React, { useState } from 'react';

import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Calendar year="2020" dayClicked={() => console.log('Day clicked')} />
        </div>
    );
}

export default App;
