import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'; // Import TableContainer from Material-UI
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Taskdetails from './Taskdetails';

function Tasks() {
  const [data, setData] = useState([   
    {
      id:1,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'High',
      type:'Onsite',
      action:'',
      
    },
    {
      id:2,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Normal',
      type:'Remote',
      action:'',
     
    },
    {
      id:3,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Low',
      type:'Onsite',
      action:'',
     
    },
    {
      id:4,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'High',
      type:'Onsite',
      action:'',

     
    },
    {
      id:5,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'High',
      type:'Onsite',
      action:'',
    },
    {
      id:6,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Normal',
      type:'Remote',
      action:'',
      
    },
    {
      id:7,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Medium',
      type:'Remote',
      action:'',
      
    },
    {
      id:8,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'High',
      type:'Onsite',
      action:'',
      
    },
    {
      id:9,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Low',
      type:'Remote',
      action:'',
      
    },
    {
      id:10,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Low',
      type:'Remote',
      action:'',
      
    },
    {
      id:11,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Normal',
      type:'Onsite',
      action:'',
      
    },
    {
      id:12,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Low',
      type:'Remote',
      action:'',
      
    },
    {
      id:13,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'High',
      type:'Onsite',
      action:'',
      
    },
    {
      id:14,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Low',
      type:'Remote',
      action:'',
     
    },
    {
      id:15,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Medium',
      type:'Onsite',
      action:'',
      
    },
    {
      id:16,
      profile_image: '..//images/Ellipse 102.png',
      first_name: 'John',
      email: 'john.doe@example.com',
      date: '13th Jan 2023',
      due_date:'02, Jan 2020',
      time:'20hrs',
      assign:'Wendy Filson',
      status:'',
      priority:'Normal',
      type:'Onsite',
      action:'',
      
    },
    // Add more contact objects as needed
  ]);
    const [contacts, setContacts] = useState(data);

    const [showModalTask, setShowModalTask] = useState(false);
    const [showModalPay, setShowModalPay] = useState(false);

    const [toggle, setToggle] = useState(true);
    const [filter, setFilter] = useState('all'); // Added state for filter
    const [dateFilter, setDateFilter] = useState('all');

    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage, setContactsPerPage] = useState(3);

       const [showDropdown, setShowDropdown] = useState(false);
       const [dropdownOpen, setDropdownOpen] = useState(false);
       const [showFooter, setShowFooter] = useState(false);

       const handleSelect = (value) => {
         setContactsPerPage(value);
         setDropdownOpen(false); // Close the dropdown after selecting an item
       };
       
     
       
       const [name, setName] = useState('');
       const [industry, setIndustry] = useState('');
       const [assign, setAssign] = useState('');
       const [email, setEmail] = useState('');
       const [phone, setPhone] = useState('');
       const [date, setDate] = useState('');
       const [time, setTime] = useState('');
       const [comment, setComment] = useState('');
   
     
       const handleSubmit = () => {
         const formData = `
           Name: ${name}
           Industry: ${industry}
           Assign: ${assign}
           Email: ${email}
           Phone: ${phone}
           Date: ${date}
           Time: ${time}
           Comment: ${comment}
         `;
         console.log(formData);
         // Show data in an alert
         alert(formData);
         setShowModalTask(false);
       };
       
     
     

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    const currentContacts = data.slice((currentPage - 1) * contactsPerPage, currentPage * contactsPerPage);

  
    const Toggle = () => {
        setToggle(!toggle);
    };
    const toggleModalTask= () => {
        setShowModalTask(!showModalTask);
      };
      const toggleModalPay= () => {
        setShowModalPay(!showModalPay);
      };
    

    const handleFilterChange = (status) => {
        setFilter(status);
        // Add logic to filter appointments based on status
    };

    const handleDateFilterChange = (date) => {
        setDateFilter(date);
        // Implement logic to filter appointments based on date
    };



    const handleStatusChange = (id, newStatus) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setData(updatedData);
    };

    const getStatusButtonContent = (status) => {
        switch (status) {
            case 'Completed':
                return { content: 'Completed', variant: 'success' };
            case 'Pending':
                return { content: 'Pending', variant: 'warning' };
            case 'In Progress':
                return { content: 'In Progress', variant: 'info' };
            default:
                return { content: 'Unknown', variant: 'secondary' };
        }
    };

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState('');

  const totalTasks = 102; // Example total tasks
  const completedTasks = 44; // Example completed tasks

 

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpperCalendarChange = (date) => {
    setSelectedDate(date);
  };

 

  const pendingTasks = totalTasks - completedTasks;
  const progressBarValue = totalTasks !== 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="flex">
   <div className={`col-4 col-md-2 position-fixed bg-[#184CA2] ${toggle ? 'w-64' : 'w-12'}`}>
  <Sidebar toggle={toggle} setToggle={setToggle} />
</div>
    <div className="flex-1 p-5 bg-gray-200 h-full relative ">
      <Nav Toggle={Toggle} />
      {/* Your main content goes here */}
      <h2 class="text-2xl">Overview</h2>
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
  
    <div class="col-span-1 md:col-span-1 leading-loose">
        <div class="bg-white shadow-sm rounded-lg p-4 ">
        
            <div className="flex justify-between items-top">
              <div className='bg-[#EEF0F9] p-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 fill-[#E9BA61]'
            viewBox="0 0 512 512">
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  </div>
                  <div> 
            <p class=" text-[#637381] font-semibold text-xs py-2">Urgent tasks</p>
            <h3 class="text-lg font-semibold flex justify-end flex-1">08</h3>
               
                </div>
                
                </div>
                <div class="flex justify-end flex-1 py-2">
            <p class="text-xs">Assigned To: <span className='font-semibold '>John Doe</span></p>
            
        </div>
                <p class="text-xs flex justify-end flex-1">Total Hours: <span className='font-semibold '>40hr</span></p>
            <div className="flex justify-between ">
                       
                        <div className="text-[#7A7A7A]">08</div>
                        <div className="text-[#E9BA61] ">14%</div>
                      </div>
                      <div className="bg-gray-200 rounded-3xl">
                        <div className="h-2 w-[14%] bg-[#E9BA61] rounded-3xl"></div>
                      </div>
           
        </div>
    </div>
    <div class="col-span-1 md:col-span-1 leading-loose">
        <div class="bg-white shadow-sm rounded-lg p-4 ">
        
            <div className="flex justify-between items-top">
              <div className='bg-[#EEF0F9] p-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 fill-[#00BCC2]'
            viewBox="0 0 512 512">
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  </div>
                  <div> 
            <p class=" text-[#637381] font-semibold text-xs py-2">In Progress Task</p>
            <h3 class="text-lg font-semibold flex justify-end flex-1">15</h3>
               
                </div>
                
                </div>
                <div class="flex justify-end flex-1 py-2">
            <p class="text-xs">Assigned To: <span className='font-semibold '>John Doe</span></p>
            
        </div>
                <p class="text-xs flex justify-end flex-1">Type: <span className='font-semibold '> Onsite</span></p>
            <div className="flex justify-between ">
                       
                        <div className="text-[#7A7A7A]">15</div>
                        <div className="text-[#00BCC2] ">35%</div>
                      </div>
                      <div className="bg-gray-200 rounded-3xl">
                        <div className="h-2 w-[35%] bg-[#00BCC2] rounded-3xl"></div>
                      </div>
           
        </div>
    </div>
    <div class="col-span-1 md:col-span-1 leading-loose">
        <div class="bg-white shadow-sm rounded-lg p-4 ">
        
            <div className="flex justify-between items-top">
              <div className='bg-[#EEF0F9] p-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 fill-[#6FD3F7]'
            viewBox="0 0 512 512">
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  </div>
                  <div> 
            <p class=" text-[#637381] font-semibold text-xs py-2">Completed Task</p>
            <h3 class="text-lg font-semibold flex justify-end flex-1">30</h3>
               
                </div>
                
                </div>
                <div class="flex justify-end flex-1 py-2">
            <p class="text-xs">Complete: <span className='font-semibold '>Due Date</span></p>
            
        </div>
                <p class="text-xs flex justify-end flex-1">Total Hours: <span className='font-semibold '>40hr</span></p>
            <div className="flex justify-between ">
                       
                        <div className="text-[#7A7A7A]">30</div>
                        <div className="text-[#6FD3F7] ">50%</div>
                      </div>
                      <div className="bg-gray-200 rounded-3xl">
                        <div className="h-2 w-[50%] bg-[#6FD3F7] rounded-3xl"></div>
                      </div>
           
        </div>
    </div>
    <div class="col-span-1 md:col-span-1 leading-loose">
        <div class="bg-white shadow-sm rounded-lg p-4 ">
        
            <div className="flex justify-between items-top">
              <div className='bg-[#EEF0F9] p-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 fill-[#184CA2]'
            viewBox="0 0 512 512">
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                  </div>
                  <div> 
            <p class=" text-[#637381] font-semibold text-xs py-2">Priority Task</p>
            <h3 class="text-lg font-semibold flex justify-end flex-1">10</h3>
               
                </div>
                
                </div>
                <div class="flex justify-end flex-1 py-2">
            <p class="text-xs">Total Task: <span className='font-semibold '>30</span></p>
            
        </div>
                <p class="text-xs flex justify-end flex-1">Priority Task: <span className='font-semibold '>10</span></p>
            <div className="flex justify-between ">
                       
                        <div className="text-[#7A7A7A]">10</div>
                        <div className="text-[#184CA2] ">40%</div>
                      </div>
                      <div className="bg-gray-200 rounded-3xl">
                        <div className="h-2 w-[40%] bg-[#184CA2] rounded-3xl"></div>
                      </div>
           
        </div>
    </div>
    </div>
   

    <div className="flex justify-between items-center gap-4 my-4">
  {/* Action button on the left */}
  <div className="relative gap-4 my-4">
    <button
      id="dropdownActionButton"
      onClick={toggleDropdown}
      className="inline-flex items-center text-[#000000]"
      type="button"
    >
      <span className="sr-only">Action button</span>
      All Appointments
      <svg
        className={`w-2.5 h-2.5 ms-2.5 transition-transform transform ${
          showDropdown ? '' : ''
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {showDropdown && (
      <div
        id="dropdownAction"
        className="z-10 absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Items I’m following
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             All Appointment
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             Completed Appointment
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
           Remaining Appointment
            </a>
          </li>
        </ul>
       
         
       
      </div>
    )}
  </div>
 
  <div className="flex gap-4">
  <button
    onClick={toggleModalPay}
    
>
    <svg xmlns="http://www.w3.org/2000/svg" className='h-8 fill-[#E9BA61] py-1' viewBox="0 0 512 512">
        <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
    </svg>    
</button>
{showModalPay && <Taskdetails onClose={toggleModalPay} />}


    <button
      onClick={toggleModalTask}
      className="border rounded px-4 py-2 bg-[#184CA2] text-[#FFFFFF]"
    >
     Add New Task
    </button>
  </div>
</div>

         

      <div class="overflow-x-auto gap-4 my-4 bg-white mb-9 flex-1 h-full">
                  
                <div class="overflow-x-auto gap-4 my-4">
                    <div className="flex justify-between items-center">
                        <TableContainer className='bg-white'>
                            <div className="col flex items-center p-3">
                            <label className="mr-2">Show entries</label>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="border border-[#E3E3E3] px-2 py-1 rounded focus:outline-none"
        >
          {contactsPerPage}
        </button>
        {dropdownOpen && (
          <div className="absolute top-full mt-1 p-3 bg-white border border-black rounded shadow-md">
            <div className="space-y-1">
              <button onClick={() => handleSelect(10)} className="block  w-full text-left ">
                10
              </button>
              <button onClick={() => handleSelect(20)} className="block  w-full text-left  focus:outline-none">
                20
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
                            <Table>
                                <TableHead className='bg-[#F3F7F9]'>
                                    <TableRow>
                                    <TableCell><input type="checkbox" /></TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Assigned To</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Due Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Hours</TableCell>
                                        <TableCell>Priority</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>Action</TableCell>
                                       
                                        
                                      
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
  {currentContacts.map((item, index) => (
    <TableRow key={index}>
      <TableCell><input type="checkbox" /></TableCell>
      <TableCell>{item.first_name}</TableCell>
      <TableCell>
        <div className="flex items-center"> {/* Wrap profile image and name in a flex container */}
          <img
            src={item.profile_image}
            alt={item.first_name}
            className="w-8 h-8 rounded-full mr-2" // Adjust image size and add margin
          />
          <span>{item.assign}</span> {/* Display first name next to the profile image */}
        </div>
      </TableCell>
      <TableCell>{item.date}</TableCell>
      

      <TableCell>{item.due_date}</TableCell>
      <TableCell>
  <select className='border border-[#CED4DA] p-2'>
    <option value="On Hold">On Hold</option>
    <option value="Open">Open</option>
    <option value="High">Completed</option>
    <option value="High">Wontfix</option>
    <option value="High">Invalid</option>
    <option value="High">Duplicate</option>
    <option value="High">Resolved</option>
     
  </select>

</TableCell>
      <TableCell>{item.time}</TableCell>
      <TableCell>
    {item.priority === 'High' ? (
       <button type="button" class="focus:outline-none text-[#FFFFFF] bg-[#F44336] hover:bg-[#FFFFFF] hover:text-[#F44336]  focus:ring-[#E58116] font-medium rounded-lg text-sm px-4 py-1 ">High</button>

    ) : item.priority === 'Normal' ? (
      <button type="button" class="focus:outline-none text-[#FFFFFF] bg-[#FFC107] hover:bg-[#FFFFFF] hover:text-[#FFC107]  focus:ring-[#E58116] font-medium rounded-lg text-sm px-4 py-1 ">Normal</button>

    ) : item.priority === 'Low' ? (
      <button type="button" class="focus:outline-none text-[#FFFFFF] bg-[#4CAF50] hover:bg-[#FFFFFF] hover:text-[#4CAF50]  focus:ring-[#E58116] font-medium rounded-lg text-sm px-4 py-1 ">Low</button>

    ) :  (
      <button type="button" class="focus:outline-none text-[#FFFFFF] bg-[#8D8B25] hover:bg-[#FFFFFF] hover:text-[#8D8B25]  focus:ring-[#E58116] font-medium rounded-lg text-sm px-4 py-1 ">Medium</button>

    ) }
</TableCell>
<TableCell>{item.type}</TableCell>
      <TableCell>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#FFC107]' viewBox="0 0 576 512">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        </button>
      </TableCell>
      <TableCell><button title="View">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-[#184CA2] hover:fill-[#184CA2]" viewBox="0 0 576 512">
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
          </svg>
        </button></TableCell>
    </TableRow>
  ))}
</TableBody>

                            </Table>
                            <div className="flex justify-between items-center p-3">
                                <p className="text-sm text-gray-600">
                                    Showing {indexOfFirstContact + 1} to{' '}
                                    {Math.min(indexOfLastContact, contacts.length)} of {contacts.length} entries
                                </p>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                        className={`text-[#7A7A7A] font-semibold py-2 px-4 rounded border border-[#D7D7D7]`}
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(1)}
                                        className={`text-[#7A7A7A] font-semibold py-2 px-4 rounded border border-[#D7D7D7]  ${currentPage === 1 ? 'border-[#7A7A7A] bg-[#184CA2] text-white' : ''
                                            }`}
                                    >
                                        1
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(2)}
                                        className={`text-[#7A7A7A] font-semibold py-2 px-4 rounded border border-[#D7D7D7] ${currentPage === 2 ? 'border-[#D7D7D7] bg-[#184CA2] text-white' : ''
                                            }`}
                                    >
                                        2
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(3)}
                                        className={`text-[#7A7A7A] font-semibold py-2 px-4 rounded border border-[#D7D7D7] ${currentPage === 3 ? 'border-[#D7D7D7] bg-[#184CA2] text-white' : ''
                                            }`}
                                    >
                                        3
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(contacts.length / 3)))}
                                        className={`text-[#7A7A7A] font-semibold py-2 px-4 rounded border border-[#7A7A7A]`}
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>

                        </TableContainer>
                 </div>
                 </div>
                  <div className={`modal ${showModalTask ? 'block' : 'hidden'} fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}>
    <div className="modal-dialog w-96 sm:w-full max-w-2xl mx-auto mt-10 ">
        <div className="modal-content bg-white rounded-md mx-auto p-4 ">
            <div className="modal-header flex justify-between items-center border-b">
                <h5 className="modal-title text-lg font-semibold ">Add New Task</h5>
                <button onClick={toggleModalTask} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="modal-body p-4">
                <form>
                    {/* Form Inputs */}
        
                   
                    <div className="grid grid-cols-1 gap-4">
                      
                <div className='flex items-center gap-10'>
                    <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Service</label>
                    <select id="service" className="text-xs mt-1 block w-full p-2 border border-[#DEDEDE] dark:border-[#DEDEDE] shadow-sm  ">
                    <option> Select Service</option>
                        <option>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                  <div className="flex items-center gap-5">
                  <label htmlFor="tasktittle" className="text-sm font-medium text-gray-700 dark:text-gray-300">Task_Tittle</label>

                        <input type="text" id="tasktittle" className="text-xs mt-1 block w-full p-2 border border-[#DEDEDE] dark:border-[#DEDEDE] shadow-sm " placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                <div className='flex items-center gap-6'>
                    <label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300">Due_Date</label>
                    <input type="date" id="date" className="text-xs mt-1 block w-full p-2 border border-[#DEDEDE] dark:border-[#DEDEDE] shadow-sm " value={date} onChange={(e) => setDate(e.target.value)} />
            </div> 
            <div className='flex items-center gap-4'>
    <label htmlFor="hours" className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Hours</label>
    <div>
        <input type="radio" id="hours1" name="service" value="Hours 1" />
        <label htmlFor="service1" className="ml-2">20 Hours</label>
        </div>
        <div className='flex '>
        <label htmlFor="hours" className="text-sm font-medium text-gray-700 dark:text-gray-300">Hours</label>
    <div>
        <input type="radio" id="hours1" name="service" value="Hours 1" />
        <label htmlFor="service1" className="ml-2">67 Hours</label>
        </div>
</div>
</div>
<div className='flex gap-16'>
    <label htmlFor="type" className="text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
    <div>
        <input type="radio" id="stype1" name="service" value="Type 1" />
        <label htmlFor="service1" className="ml-2">Billable</label>
        <div>
        <input type="radio" id="type2" name="service" value="Type 2" />
        <label htmlFor="service1" className="ml-2">Non-Billable</label>
        </div>
        </div>
   
   
</div>


            </div>
          
                
               
            <div className="mt-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Comments</label>
                <textarea id="comment" rows="4" placeholder="Enter message" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
      
                   
                    <button type="button" onClick={handleSubmit} className="mt-4 w-full px-4 py-2 bg-[#184CA2] text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#184CA2] focus:ring-offset-2 focus:ring-offset-white">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

                </div>
                <div className="bottom-0 left-0  right-0 bg-white text-[#B6B6B6] text-center text-xs absolute p-2">
                &copy; {new Date().getFullYear()} Bamfer Consulting llc. All Right Reserved.
            </div>
      </div>
   
    </div>

  );
}
export default Tasks;


