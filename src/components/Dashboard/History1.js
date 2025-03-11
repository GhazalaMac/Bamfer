import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'; // Import TableContainer from Material-UI
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function History1() {

    const [data, setData] = useState([
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
        // Add more data objects as needed
    ]);
    const [contacts, setContacts] = useState(data);

    const [showModal, setShowModal] = useState(false);

    const [toggle, setToggle] = useState(true);
    const [filter, setFilter] = useState('all'); // Added state for filter
    const [dateFilter, setDateFilter] = useState('all');

    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage, setContactsPerPage] = useState(3);

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    const currentContacts = data.slice((currentPage - 1) * contactsPerPage, currentPage * contactsPerPage);

    const Toggle = () => {
        setToggle(!toggle);
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


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-fluid bg-light min-vh-100">
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
                    <div className="container-fluid bg-light">
                        <div className="row">
                            <div className="col">
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        All History
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleFilterChange('all')}>All Completed History</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('completed')}>My Delegated History</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('remaining')}>My Completed History</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('remaining')}>My Open History</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('remaining')}>My History</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('remaining')}>All History</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShowModal(true)} style={{ border: '1px solid #023f80', backgroundColor: '#023f80' }}>
                                        View All
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <TableContainer className='bg-white'>
                            <div className="col d-flex align-items-center p-3">
                                <Form.Label>Show entries </Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ border: '1px solid #ccc' }}>
                                        {contactsPerPage}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setContactsPerPage(10)}>10</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setContactsPerPage(20)}>20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Table>
                                <TableHead style={{ backgroundColor: '#F3F7F9' }}>
                                    <TableRow>
                                        <TableCell></TableCell>
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
                                    {currentContacts.map((item, index) => ( // Use currentContacts instead of data
                                        <TableRow key={index}>
                                            <TableCell>
                                                <input type="checkbox" />
                                            </TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.last_login}</TableCell>
                                            <TableCell>{item.ip_address}</TableCell>
                                            <TableCell>{item.company}</TableCell>
                                            <TableCell >

                                                {item.status === 'Approved' ? (
                                                    <i className="bi bi-check text-success" style={{fontSize:'24px'}}></i>
                                                ) : (
                                                    <i className="bi bi-x text-danger" style={{fontSize:'24px'}}></i>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <a href="#" title="Delete" className="btn btn-sm" onClick={() => handleDelete(item.id)}>
                                                    <span style={{ color: '#FF0000', fontSize: '20px' }}>
                                                        <i className="bi bi-trash"></i>
                                                    </span>
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p>
                                    Showing {indexOfFirstContact + 1} to{' '}
                                    {Math.min(indexOfLastContact, contacts.length)} of {contacts.length} entries
                                </p>
                                <Pagination>
                                    <Pagination.Prev
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    />
                                    <Pagination.Item
                                        onClick={() => setCurrentPage(1)} // Update the onClick handler to set currentPage to 1
                                        active={currentPage === 1} // Add active class if currentPage is 1
                                    >
                                        {1}
                                    </Pagination.Item>
                                    <Pagination.Item
                                        onClick={() => setCurrentPage(2)} // Update the onClick handler to set currentPage to 2
                                        active={currentPage === 2} // Add active class if currentPage is 2
                                    >
                                        {2}
                                    </Pagination.Item>
                                    <Pagination.Item
                                        onClick={() => setCurrentPage(3)} // Update the onClick handler to set currentPage to 3
                                        active={currentPage === 3} // Add active class if currentPage is 3
                                    >
                                        {3}
                                    </Pagination.Item>
                                    <Pagination.Next
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={indexOfLastContact >= contacts.length}
                                    />
                                </Pagination>
                            </div>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History1;

