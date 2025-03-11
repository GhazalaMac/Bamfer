
// // export default CalendarPage;
// import React, {useState} from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Sidebar from './Sidebar';
// import Nav from './Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const localizer = momentLocalizer(moment);

// function CalendarPage() {
//     const [toggle, setToggle] = useState(true);
//     const Toggle = () => {
//         setToggle(!toggle);
//     };

//     return (

//         <div className="container-fluid bg-light min-vh-100">
//         <div className="row">
//             {toggle && (
//                 <div className='col-4 col-md-2 position-fixed'>
//                     <Sidebar />
//                 </div>
//             )}
//             {toggle && <div className='col-4 col-md-2'></div>}
//             <div className='col position-relative'>
//                 <Nav Toggle={Toggle} />
//                 <br />
//                 <div className="container-fluid bg-light">
//                     <div className="row">
//                         <div className="col">
//                             <div className='calendar-container'>
//                          <Calendar
//                              localizer={localizer}
//                              views={['month', 'week', 'day']} // Set the views to display
//                              startAccessor="start"
//                              endAccessor="end"
//                              style={{ height: 500 }} // Adjust the height as needed
//                          />
//                      </div>
//    </div>
//    </div>
//    </div>
//    </div>
//    </div>
//    </div>
//     );
// }

// export default CalendarPage;
import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Sidebar from './Sidebar';
import Nav from './Nav';


function CalendarPage() {
    const calendarRef = useRef(null);
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.render(); // Render the calendar once it's initialized
    }, []);

    return (
        <div className="container-fluid bg-light min-vh-100   bg-pink-100">
            <div className="row">
                {toggle && (
                    <div className='col-4 col-md-2 position-fixed'>
                        <Sidebar />
                    </div>
                )}
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col position-relative'>
                    <Nav Toggle={Toggle} />
                    <br />
                    <div className="container-fluid bg-white p-3">
                        <div className="row">
                            <div className="col">
                            <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;
