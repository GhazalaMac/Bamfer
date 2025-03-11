import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  isWithinInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from "date-fns";
import {
  DayPicker,
  Row,
} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ScopedCssBaseline } from '@mui/material';

// Function to determine if a given date falls within the current week
function isDateInCurrentWeek(dateToCheck) {
  const today = new Date();
  const start = startOfWeek(today);
  const end = endOfWeek(today);
  return isWithinInterval(dateToCheck, { start, end });
}

// Component to render only the days of the current week
function CurrentWeekRow(props) {
  const isNotCurrentWeek = props.dates.every((date) => !isDateInCurrentWeek(date));
  if (isNotCurrentWeek) return <></>;
  return <Row {...props} />;
}

// Custom navigation bar component for the calendar
const NavigationBar = ({ onPreviousClick, onNextClick }) => {
  return (
    <div>
      <button onClick={onPreviousClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Previous
      </button>
      <button onClick={onNextClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  );
};

const Dashboard = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePreviousClick = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextClick = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <>
      <div>
        <div>
          {/* DayPicker component with custom Row component */}
          <DayPicker
          
            components={{ Row: CurrentWeekRow }}
            showOutsideDays
            mode="range"
            selected={selectedDays}
            onDayClick={(day) => setSelectedDays([day])}
            navbarElement={<NavigationBar />}
            month={new Date()}
            fromMonth={startOfMonth(new Date())}
            toMonth={endOfMonth(new Date())}
            // className="rdp-cell  hover:bg-blue-500 " 
            
          // headerRowClassName="rdp-head_row bg-blue-500 hover:bg-[#184CA2] rounded" 
          /> 
        </div>
        <hr /> {/* Horizontal line to separate the calendars */}
        <div> 

          

          {/* Full calendar */}
          <DayPicker
            showOutsideDays
            month={currentMonth}
            fromMonth={startOfMonth(new Date())}
            toMonth={endOfMonth(new Date())}
            navbarElement={<NavigationBar onPreviousClick={handlePreviousClick} onNextClick={handleNextClick} />}
          />
        </div>
      </div>
    </>
  );
  
}

export default Dashboard;

