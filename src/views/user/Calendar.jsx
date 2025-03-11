import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import { Breadcrumbs } from "@material-tailwind/react";

function Calendar() {
    const calendarRef = useRef(null);
    const [toggle, setToggle] = useState(true);
    const [showFooter, setShowFooter] = useState(false);

    const Toggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.render(); // Render the calendar once it's initialized

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            // Adjusting the threshold as needed
            if (documentHeight - scrollTop <= windowHeight + 50) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex bg-[#EEF0F9]">
            <div className={`col-4 col-md-2 bg-[#184CA2] ${toggle ? 'w-64' : 'w-12'}`}>
                <Sidebar toggle={toggle} setToggle={setToggle} />
            </div>
            <div className="flex-1 flex flex-col p-5 h-full relative">
                <Nav Toggle={Toggle} />
                <div className='py-4'>
                    <Breadcrumbs fullWidth>
                        <a href="/user/dashboard" className='font-bold' >
                            Dashboard
                        </a>
                        <a href="#" className=" font-semibold">Calendar</a>
                    </Breadcrumbs>
                </div>
                <div className="overflow-x-auto flex-1 bg-[#FFFFFF] h-full p-5 mb-9">
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: 'prev,next today',
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay',
                        }}
                        className="m-3 bg-[#DBDBDB] h-full"
                    />
                </div>
                {showFooter && (
                    <div className="bottom-0 left-0  right-0 bg-white text-[#B6B6B6] text-center text-xs absolute p-2">
                        &copy; {new Date().getFullYear()} Bamfer Consulting llc. All Right Reserved.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Calendar;
