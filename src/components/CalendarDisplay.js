import React from 'react'

function CalendarDisplay(props) {
    //debugger 
    console.log("this is calendardisplay props", props)
    return (
        <div className="calendar-home-screen">
            {/* <CalendarContainer 
                title={props.title}
                duration={props.duration}
                date={props.date} 
            /> */}
            <ul>{props.title}</ul>
        </div>
    )
}

export default CalendarDisplay