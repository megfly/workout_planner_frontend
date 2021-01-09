import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarDisplay() {
    //set the states of calendar date
    const [value, onChange] = useState(new Date());
    console.log(value)
    console.log(onChange)
    
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
