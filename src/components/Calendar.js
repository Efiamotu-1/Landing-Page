import React from 'react'
import "./Calendar.css";

import {CalendarComponent} from '@syncfusion/ej2-react-calendars'



export default function Calendar() {
  
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6)
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25)
    
    return (
    <div>
        <CalendarComponent
        min={startDate}
        max={endDate}
        ></CalendarComponent>
    </div>
  )
}
