import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

function Appointment() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(3); // Changed to 3 contacts per page
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState('all'); // Added state for filter
  const [dateFilter, setDateFilter] = useState('all');


  // State variables for modal form inputs
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [assign, setAssign] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const Toggle = () => {
    setToggle(!toggle);
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
  
  const handleFilterChange = (status) => {
    setFilter(status);
    // Add logic to filter contacts based on status
    // For example, you can filter contacts based on their status (completed, remaining, etc.)
  };

  const handleDateFilterChange = (date) => {
    setDateFilter(date);
    // Implement logic to filter contacts based on date
  };


  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col position-relative">
          <Nav Toggle={Toggle} />
          <br/>
          
          <div className="container-fluid nav-container">
            <div className="row">
              <div className="col">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    All Appointment
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleFilterChange('all')}>All Appointments</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterChange('completed')}>Completed Appointment</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilterChange('remaining')}>Remaining Appointment</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col">
                <div className="d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: '1px solid #023f80',  marginRight:'10px'}}>
                      Today
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleDateFilterChange('today')}>Today</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDateFilterChange('yesterday')}>Yesterday</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDateFilterChange('tomorrow')}>Tomorrow</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button 
                    onClick={() => setShowModal(true)} 
                    style={{ border: '1px solid #023f80', backgroundColor:'#023f80' }}>
                    Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <br/>
          <br/>
  
          <div className="container-fluid nav-container">
            <div className="row ">
              <div className="col d-flex align-items-center">
                <Form.Label className="mr-2">Show entries</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {contactsPerPage}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setContactsPerPage(3)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => setContactsPerPage(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => setContactsPerPage(20)}>20</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-auto d-flex align-items-center">
                <Form className="ml-auto">
                  <InputGroup className="my-3">
                    <Form.Control
                      style={{ width: '150px' }}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search"
                    />
                  </InputGroup>
                </Form>
              
              </div>
            </div>
          </div>
          
          <div className="container-fluid nav-container">
            <div className="row ">
              <div className="col">
                <Container>
                  <Table  hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Assign</th>
                        <th>Appointment ID</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentContacts
                        .filter((item) => {
                          return search.toLowerCase() === ''
                            ? item
                            : item.first_name.toLowerCase().includes(search);
                        })
                        .map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>
                              <img
                                src={item.profile_image}
                                alt={item.first_name}
                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                              />
                            </td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.assign}</td>
                            <td>{item.appointment_id}</td>
                            <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                        
                          
                        </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-between align-items-center">
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
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        {1}
                      </Pagination.Item>
                      <Pagination.Item
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        {2}
                      </Pagination.Item>
                      <Pagination.Item
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        {3}
                      </Pagination.Item>
                      <Pagination.Next
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={indexOfLastContact >= contacts.length}
                      />
                    </Pagination>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Modal Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
  
            <Row className="mb-3">
              <Form.Group as={Col} controlId="industry">
                <Form.Label>Industry</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
               
              </Form.Group>
  
              <Form.Group as={Col} controlId="assign">
                <Form.Label>Assign</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
  
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
            </Row        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group  as={Col} controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </Form.Group>
          </Row>
          <Form.Group controlId="comment">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
          </Form.Group>

        </Form>
        <Button onClick={handleSubmit} className="w-100 mt-3" style={{backgroundColor:'#184CA2'}}>
          Save
        </Button>
      </Modal.Body>
    </Modal>
  </div>
);
}

  

export default Appointment;
const data = [
  {
    id:1,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:2,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:3,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:4,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:5,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:6,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:7,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:8,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:9,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:10,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:11,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:12,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:13,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:14,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:15,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  {
    id:16,
    first_name: 'John',
    email: 'john.doe@example.com',
    date: '13th Jan 2023',
    time:'11:00AM',
    assign:'Wendy Filson',
    appointment_id:'ED-2064',
    profile_image: 'https://example.com/profile_images/john_doe.jpg'
  },
  // Add more contact objects as needed
];