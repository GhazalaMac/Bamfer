import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'; // Import TableContainer from Material-UI
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Breadcrumbs } from "@material-tailwind/react";



function Appointment() {

    const [data, setData] = useState([   
        {
          id:1,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:2,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
         
        },
        {
          id:3,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
         
        },
        {
          id:4,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
         
        },
        {
          id:5,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:6,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:7,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:8,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:9,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:10,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:11,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:12,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:13,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:14,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
         
        },
        {
          id:15,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'John',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        {
          id:16,
          profile_image: '..//images/Ellipse 102.png',
          first_name: 'Johnii',
          email: 'john.doe@example.com',
          date: '13th Jan 2023',
          time:'11:00AM',
          assign:'Wendy Filson',
          appointment_id:'ED-2064',
          
        },
        // Add more contact objects as needed
      ]);
    const [contacts, setContacts] = useState(data);

    const [showModal, setShowModal] = useState(false);

    const [toggle, setToggle] = useState(true);
    const [filter, setFilter] = useState('all'); // Added state for filter
    const [dateFilter, setDateFilter] = useState('all');

    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage, setContactsPerPage] = useState(3);

       const [showDropdown, setShowDropdown] = useState(false);
       const [name, setName] = useState('');
       const [industry, setIndustry] = useState('');
       const [assign, setAssign] = useState('');
       const [email, setEmail] = useState('');
       const [phone, setPhone] = useState('');
       const [date, setDate] = useState('');
       const [time, setTime] = useState('');
       const [comment, setComment] = useState('');
       const [dropdownOpen, setDropdownOpen] = useState(false);

       const handleSelect = (value) => {
         setContactsPerPage(value);
         setDropdownOpen(false); // Close the dropdown after selecting an item
       };
     
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
         setShowModal(false);
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
    const toggleModal = () => {
        setShowModal(!showModal);
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

    return (
        <div className="flex">
   <div className={`col-4 col-md-2 position-fixed bg-[#184CA2] ${toggle ? 'w-64' : 'w-12'}`}>
  <Sidebar toggle={toggle} setToggle={setToggle} />
</div>
    <div className="flex-1 p-5 bg-gray-200 h-full relative ">
      <Nav Toggle={Toggle} />
      <div className='py-4'>
      <Breadcrumbs fullWidth>
      
      <a href="/user/dashboard" className='font-bold' >
       Dashboard
      </a>
      <a href="#" className=" font-semibold">Appiontment</a>
    </Breadcrumbs>
    </div>
      <div className="flex justify-between items-center">
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
  {/* Select dropdown and appointment button on the right */}
  <div className="flex gap-4">
    
    <select
      id="inputFilter"
      className="px-4 py-2 rounded-lg border border-[#184CA2] dark:border-none dark:bg-[#184CA2] p-2 text-sm focus:border-[#184CA2] focus:outline-none focus:ring-1 focus:ring-blue-400"
    >
      <option value="1" selected>
        Today
      </option>
      <option value="2" className="mt-2">
        Tomorrow
      </option>
      <option value="3" className="mt-2">
        Yesterday
      </option>
    </select>
    <button
      onClick={toggleModal}
      className="border rounded px-4 py-2 bg-[#184CA2] text-[#FFFFFF]"
    >
      Appointment
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
                                    <TableCell>#</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Time</TableCell>
                                        <TableCell>Assign</TableCell>
                                        <TableCell>Appointment ID</TableCell>
                                        
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
  {currentContacts.map((item, index) => (
    <TableRow key={index}>
      <TableCell>{item.id}</TableCell>
      <TableCell>
        <div className="flex items-center"> {/* Wrap profile image and name in a flex container */}
          <img
            src={item.profile_image}
            alt={item.first_name}
            className="w-8 h-8 rounded-full mr-2" // Adjust image size and add margin
          />
          <span>{item.first_name}</span> {/* Display first name next to the profile image */}
        </div>
      </TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.time}</TableCell>
      <TableCell>{item.assign}</TableCell>
      <TableCell>{item.appointment_id}</TableCell>
      <TableCell>
        <button title="View">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-[#184CA2] hover:fill-[#184CA2]" viewBox="0 0 576 512">
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
          </svg>
        </button>
      </TableCell>
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
                 <div className={`modal ${showModal ? 'block' : 'hidden'} fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}>
    <div className="modal-dialog w-96 sm:w-full max-w-2xl mx-auto mt-10">
        <div className="modal-content bg-white rounded-md mx-auto p-4">
            <div className="modal-header flex justify-between items-center">
                <h5 className="modal-title text-lg font-semibold">Schedule Activity</h5>
                <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="modal-body p-4">
                <form>
                    {/* Form Inputs */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input type="text" id="name" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                   
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Industry</label>
                    <select id="industry" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200">
                        <option>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="assign" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assign</label>
                    <select id="assign" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200">
                        <option>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" id="email" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                    <input type="tel" id="phone" className=" text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                    <input type="date" id="date" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time</label>
                    <input type="time" id="time" className="text-xs mt-1 block w-full p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#184CA2] focus:ring focus:ring-[#184CA2] dark:bg-gray-700 dark:text-gray-200" value={time} onChange={(e) => setTime(e.target.value)} />
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

export default Appointment;
