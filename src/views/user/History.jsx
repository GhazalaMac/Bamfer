
import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'; // Import TableContainer from Material-UI
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Breadcrumbs } from "@material-tailwind/react";


function History() {

            const [data, setData] = useState([
        // Your data here
        {
            id: 1,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 2,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 3,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Danger',

        },
        {
            id: 4,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 5,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 6,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 7,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Danger',

        },
        {
            id: 8,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 9,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Danger',

        },
        {
            id: 10,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 11,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
        {
            id: 12,
            name: 'Micheal Smith',
            email: 'DorisAMontford@rhyta.com',
            last_login: '29/12/2023 11:53 AM',
            ip_address: '194.44.234.160',
            company: 'Solit IT Solution',
            status: 'Approved',

        },
    ]);


    const [contacts, setContacts] = useState(data);

    const [showModal, setShowModal] = useState(false);

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
    <div className="flex-1 p-5 bg-gray-200 h-full relative">
      <Nav Toggle={Toggle} />
      <div className='py-4'>
      <Breadcrumbs fullWidth>
      
      <a href="/user/dashboard" className='font-bold' >
       Dashboard
      </a>
      <a href="#" className=" font-semibold">History</a>
    </Breadcrumbs>
    </div>
      <div className="flex justify-between items-center gap-4 ">
  {/* Action button on the left */}
  <div className="relative gap-4 my-4">
    <button
      id="dropdownActionButton"
      onClick={toggleDropdown}
      className="inline-flex items-center text-[#000000]"
      type="button"
    >
      <span className="sr-only">Action button</span>
      All History
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
        All Completed History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
             My Delegated History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
           My Completed History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
          My Open History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
          My History
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
           All History
            </a>
          </li>
        </ul>
       
         
       
      </div>
    )}
  </div>
  {/* Select dropdown and appointment button on the right */}
  <div className="flex gap-4">
  <button id="viewAllButton" className=" border border-[#184CA2] text-[#FFFFFF] bg-[#184CA2]   rounded hover:bg-[#FFFFFF] hover:text-[#184CA2] p-2" onclick="toggleRows()">View All</button>
    
  </div>
</div>

         

      <div class="overflow-x-auto bg-white mb-9 flex-1 h-full">
                  
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
                                         <TableCell>Email</TableCell>
                                         <TableCell>Last Login</TableCell>
                                         <TableCell>IP Address</TableCell>
                                         <TableCell>Browser</TableCell>
                                         <TableCell>Successfull</TableCell>
                                         <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                
                                                             <TableBody>
                                     {currentContacts.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <input type="checkbox" />
                                            </TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.last_login}</TableCell>
                                            <TableCell>{item.ip_address}</TableCell>
                                            <TableCell>{item.company}</TableCell>
                                            <TableCell>
                                                {item.status === 'Approved' ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-[#18AA00] hover:fill-[#18AA00]" viewBox="0 0 448 512">
                                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                                ) : (
                                                    <svg class="w-5 fill-[#FF0000] hover:fill-[#FF0000]" viewBox="0 0 16 16">
                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                )}
                                            </TableCell>

                                            <TableCell>
        <a
          href="#"
          title="Delete"
          className="btn btn-sm"
          onClick={() => handleDelete(item.id)}
        >
         
          <svg xmlns="http://www.w3.org/2000/svg"class="w-3 fill-[#FF0000] hover:fill-[#FF0000]"  viewBox="0 0 448 512"> 
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
          
        </a>
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


                                </div>
                                <div className="bottom-0 left-0  right-0 bg-white text-[#B6B6B6] text-center text-xs absolute p-2">
                &copy; {new Date().getFullYear()} Bamfer Consulting llc. All Right Reserved.
            </div>
                                </div>
                            </div>
                      
                 
    
    );
}

export default History;
