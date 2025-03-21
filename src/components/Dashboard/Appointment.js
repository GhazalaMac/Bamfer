// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Pagination from 'react-bootstrap/Pagination';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Sidebar';
// import Nav from './Nav';

// function Appointment() {
//   const [contacts, setContacts] = useState(data);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [contactsPerPage, setContactsPerPage] = useState(3); // Changed to 3 contacts per page
//   const [toggle, setToggle] = useState(true);

//   const indexOfLastContact = currentPage * contactsPerPage;
//   const indexOfFirstContact = indexOfLastContact - contactsPerPage;
//   const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const Toggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="container-fluid bg-light min-vh-100">
//       <div className="row">
//         {toggle && (
//           <div className="col-4 col-md-2 position-fixed">
//             <Sidebar />
//           </div>
//         )}
//         {toggle && <div className="col-4 col-md-2"></div>}
//         <div className="col position-relative">
//           <Nav Toggle={Toggle} />
//           <div className="container">
//             <div className="row ">
//               <div className="col d-flex align-items-center py-2">
//                 <Form.Label className="mr-2">Show entries</Form.Label>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" id="dropdown-basic">
//                     {contactsPerPage}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item onClick={() => setContactsPerPage(3)}>3</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(5)}>5</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(10)}>10</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(20)}>20</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//               <div className="col-auto d-flex align-items-center">
//                 <Form className="ml-auto">
//                   <InputGroup className="my-3">
//                     <Form.Control
//                       style={{ width: '150px' }}
//                       onChange={(e) => setSearch(e.target.value)}
//                       placeholder="Search"
//                     />
//                   </InputGroup>
//                 </Form>
//                 <Button variant="primary">Create</Button>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col">
//               <Container>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>First Name</th>
//                       <th>Last Name</th>
//                       <th>Email</th>
//                       <th>Phone</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentContacts
//                       .filter((item) => {
//                         return search.toLowerCase() === ''
//                           ? item
//                           : item.first_name.toLowerCase().includes(search);
//                       })
//                       .map((item, index) => (
//                         <tr key={index}>
//                           <td>{item.first_name}</td>
//                           <td>{item.last_name}</td>
//                           <td>{item.email}</td>
//                           <td>{item.phone}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </Table>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p>
//                     Showing {indexOfFirstContact + 1} to{' '}
//                     {Math.min(indexOfLastContact, contacts.length)} of {contacts.length} entries
//                   </p>
//                   <Pagination>
//                     <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
//                     <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{1}</Pagination.Item> 
//         <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{2}</Pagination.Item> 
//         <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{3}</Pagination.Item>
//                     <Pagination.Next
//                       onClick={() => setCurrentPage(currentPage + 1)}
//                       disabled={indexOfLastContact >= contacts.length}
//                     />
//                   </Pagination>
//                 </div>
//               </Container>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;



// export const data = [
//   {
//     id: 1,
//     first_name: 'Wilmette',
//     last_name: 'Maasz',
//     email: 'wmaasz0@jalbum.net',
//     phone: '130-309-6439',
//   },
//   {
//     id: 2,
//     first_name: 'Morry',
//     last_name: 'Heater',
//     email: 'mheater1@yale.edu',
//     phone: '814-809-2958',
//   },
//   {
//     id: 3,
//     first_name: 'Laverne',
//     last_name: 'MacMorland',
//     email: 'lmacmorland2@webnode.com',
//     phone: '271-342-7249',
//   },
//   {
//     id: 4,
//     first_name: 'Cindee',
//     last_name: 'De Freitas',
//     email: 'cdefreitas3@privacy.gov.au',
//     phone: '617-624-6967',
//   },
//   {
//     id: 5,
//     first_name: 'Carole',
//     last_name: 'Reffe',
//     email: 'creffe4@nih.gov',
//     phone: '738-966-3137',
//   },
//   {
//     id: 6,
//     first_name: 'Ansel',
//     last_name: 'Iwanicki',
//     email: 'aiwanicki5@pagesperso-orange.fr',
//     phone: '716-371-2467',
//   },
//   {
//     id: 7,
//     first_name: 'Herold',
//     last_name: 'Mungham',
//     email: 'hmungham6@goodreads.com',
//     phone: '659-298-5396',
//   },
//   {
//     id: 8,
//     first_name: 'Sibeal',
//     last_name: 'Andreacci',
//     email: 'sandreacci7@bloomberg.com',
//     phone: '508-876-5450',
//   },
//   {
//     id: 9,
//     first_name: 'Eustacia',
//     last_name: 'Matteuzzi',
//     email: 'ematteuzzi8@rakuten.co.jp',
//     phone: '953-375-3684',
//   },
//   {
//     id: 10,
//     first_name: 'Tiebold',
//     last_name: 'Powe',
//     email: 'tpowe9@dmoz.org',
//     phone: '574-154-1045',
//   },
//   {
//     id: 11,
//     first_name: 'Deloris',
//     last_name: 'Flintoffe',
//     email: 'dflintoffea@usa.gov',
//     phone: '281-262-2474',
//   },
//   {
//     id: 12,
//     first_name: 'Janela',
//     last_name: 'Coite',
//     email: 'jcoiteb@columbia.edu',
//     phone: '241-621-1528',
//   },
//   {
//     id: 13,
//     first_name: 'Ines',
//     last_name: 'Ginity',
//     email: 'iginityc@studiopress.com',
//     phone: '924-888-0857',
//   },
//   {
//     id: 14,
//     first_name: 'Godfree',
//     last_name: 'Bastistini',
//     email: 'gbastistinid@pen.io',
//     phone: '694-172-1204',
//   },
//   {
//     id: 15,
//     first_name: 'Jazmin',
//     last_name: 'Exrol',
//     email: 'jexrole@networkadvertising.org',
//     phone: '265-313-4188',
//   },
//   {
//     id: 16,
//     first_name: 'Sacha',
//     last_name: 'Sidwick',
//     email: 'ssidwickf@home.pl',
//     phone: '960-987-8058',
//   },
//   {
//     id: 17,
//     first_name: 'Leonhard',
//     last_name: 'Capron',
//     email: 'lcaprong@zimbio.com',
//     phone: '585-187-8345',
//   },
//   {
//     id: 18,
//     first_name: 'My',
//     last_name: 'Raiment',
//     email: 'mraimenth@abc.net.au',
//     phone: '557-179-7329',
//   },
//   {
//     id: 19,
//     first_name: 'Riley',
//     last_name: 'Botting',
//     email: 'rbottingi@diigo.com',
//     phone: '684-766-2752',
//   },
//   {
//     id: 20,
//     first_name: 'Daron',
//     last_name: 'Pinkney',
//     email: 'dpinkneyj@redcross.org',
//     phone: '872-837-1696',
//   },
//   {
//     id: 21,
//     first_name: 'Susi',
//     last_name: 'Leipelt',
//     email: 'sleipeltk@reference.com',
//     phone: '921-979-2052',
//   },
//   {
//     id: 22,
//     first_name: 'Marco',
//     last_name: 'Drinkhall',
//     email: 'mdrinkhalll@wunderground.com',
//     phone: '877-857-1366',
//   },
//   {
//     id: 23,
//     first_name: 'Donal',
//     last_name: 'Eronie',
//     email: 'deroniem@google.fr',
//     phone: '239-493-4126',
//   },
//   {
//     id: 24,
//     first_name: 'Zane',
//     last_name: 'Caulder',
//     email: 'zcauldern@uiuc.edu',
//     phone: '122-984-4442',
//   },
//   {
//     id: 25,
//     first_name: 'Esma',
//     last_name: 'Glencrash',
//     email: 'eglencrasho@cnet.com',
//     phone: '384-610-3439',
//   },
//   {
//     id: 26,
//     first_name: 'Ailina',
//     last_name: 'Raymond',
//     email: 'araymondp@lycos.com',
//     phone: '896-480-7485',
//   },
//   {
//     id: 27,
//     first_name: 'Kaitlynn',
//     last_name: 'Spearing',
//     email: 'kspearingq@earthlink.net',
//     phone: '801-590-3008',
//   },
//   {
//     id: 28,
//     first_name: 'Tammara',
//     last_name: 'Gynni',
//     email: 'tgynnir@china.com.cn',
//     phone: '411-827-8792',
//   },
//   {
//     id: 29,
//     first_name: 'Osmond',
//     last_name: 'Murthwaite',
//     email: 'omurthwaites@blog.com',
//     phone: '672-381-6692',
//   },
//   {
//     id: 30,
//     first_name: 'Britta',
//     last_name: 'Billings',
//     email: 'bbillingst@wisc.edu',
//     phone: '970-104-3746',
//   },
//   {
//     id: 31,
//     first_name: 'Clarice',
//     last_name: 'Linsay',
//     email: 'clinsayu@issuu.com',
//     phone: '334-704-0623',
//   },
//   {
//     id: 32,
//     first_name: 'Jillie',
//     last_name: 'Goburn',
//     email: 'jgoburnv@nationalgeographic.com',
//     phone: '100-589-9642',
//   },
//   {
//     id: 33,
//     first_name: 'Kelvin',
//     last_name: 'Wilds',
//     email: 'kwildsw@alibaba.com',
//     phone: '947-677-8040',
//   },
//   {
//     id: 34,
//     first_name: 'Jeannette',
//     last_name: 'Payle',
//     email: 'jpaylex@devhub.com',
//     phone: '168-817-0008',
//   },
//   {
//     id: 35,
//     first_name: 'Zacherie',
//     last_name: 'Rowthorn',
//     email: 'zrowthorny@ezinearticles.com',
//     phone: '648-210-8508',
//   },
//   {
//     id: 36,
//     first_name: 'Anthiathia',
//     last_name: 'Arnow',
//     email: 'aarnowz@studiopress.com',
//     phone: '750-373-8439',
//   },
//   {
//     id: 37,
//     first_name: 'Elysee',
//     last_name: 'Fenich',
//     email: 'efenich10@acquirethisname.com',
//     phone: '624-398-1336',
//   },
//   {
//     id: 38,
//     first_name: 'Ole',
//     last_name: 'Sedgwick',
//     email: 'osedgwick11@forbes.com',
//     phone: '554-584-4881',
//   },
//   {
//     id: 39,
//     first_name: 'Allsun',
//     last_name: 'MacGilpatrick',
//     email: 'amacgilpatrick12@baidu.com',
//     phone: '851-745-6306',
//   },
//   {
//     id: 40,
//     first_name: 'Ric',
//     last_name: 'Sive',
//     email: 'rsive13@accuweather.com',
//     phone: '469-754-5234',
//   },
//   {
//     id: 41,
//     first_name: 'Kissiah',
//     last_name: 'Gynne',
//     email: 'kgynne14@ocn.ne.jp',
//     phone: '831-485-1484',
//   },
//   {
//     id: 42,
//     first_name: 'Phyllys',
//     last_name: 'Morecombe',
//     email: 'pmorecombe15@cbc.ca',
//     phone: '184-751-6164',
//   },
//   {
//     id: 43,
//     first_name: 'Happy',
//     last_name: 'Pinnington',
//     email: 'hpinnington16@xinhuanet.com',
//     phone: '323-704-8309',
//   },
//   {
//     id: 44,
//     first_name: 'Kermie',
//     last_name: 'Aird',
//     email: 'kaird17@nymag.com',
//     phone: '417-994-0914',
//   },
//   {
//     id: 45,
//     first_name: 'Cross',
//     last_name: 'Vondra',
//     email: 'cvondra18@umich.edu',
//     phone: '231-406-1331',
//   },
//   {
//     id: 46,
//     first_name: 'Conny',
//     last_name: 'Bonsall',
//     email: 'cbonsall19@auda.org.au',
//     phone: '130-871-6595',
//   },
//   {
//     id: 47,
//     first_name: 'Rachele',
//     last_name: 'Richly',
//     email: 'rrichly1a@usgs.gov',
//     phone: '271-871-7044',
//   },
//   {
//     id: 48,
//     first_name: 'Hynda',
//     last_name: 'Chastey',
//     email: 'hchastey1b@ning.com',
//     phone: '418-606-1849',
//   },
//   {
//     id: 49,
//     first_name: 'Dorrie',
//     last_name: 'Bordis',
//     email: 'dbordis1c@plala.or.jp',
//     phone: '385-876-4413',
//   },
//   {
//     id: 50,
//     first_name: 'Ferguson',
//     last_name: 'Amiss',
//     email: 'famiss1d@ox.ac.uk',
//     phone: '551-597-7681',
//   },
//   {
//     id: 51,
//     first_name: 'Suzy',
//     last_name: 'Lamshead',
//     email: 'slamshead1e@symantec.com',
//     phone: '309-129-3187',
//   },
//   {
//     id: 52,
//     first_name: 'Jacky',
//     last_name: 'Blaiklock',
//     email: 'jblaiklock1f@dagondesign.com',
//     phone: '657-899-3208',
//   },
//   {
//     id: 53,
//     first_name: 'Nicholle',
//     last_name: 'Yakunin',
//     email: 'nyakunin1g@deliciousdays.com',
//     phone: '173-758-2439',
//   },
//   {
//     id: 54,
//     first_name: 'Lloyd',
//     last_name: 'Kirrens',
//     email: 'lkirrens1h@amazonaws.com',
//     phone: '221-656-9230',
//   },
//   {
//     id: 55,
//     first_name: 'Ingmar',
//     last_name: 'Monelli',
//     email: 'imonelli1i@slideshare.net',
//     phone: '260-824-0080',
//   },
//   {
//     id: 56,
//     first_name: 'Olimpia',
//     last_name: 'Popov',
//     email: 'opopov1j@squidoo.com',
//     phone: '300-983-1242',
//   },
//   {
//     id: 57,
//     first_name: 'Monroe',
//     last_name: 'Seater',
//     email: 'mseater1k@bbb.org',
//     phone: '187-539-3134',
//   },
//   {
//     id: 58,
//     first_name: 'Kippie',
//     last_name: 'Inseal',
//     email: 'kinseal1l@drupal.org',
//     phone: '335-389-8237',
//   },
//   {
//     id: 59,
//     first_name: 'Crysta',
//     last_name: 'Tukesby',
//     email: 'ctukesby1m@vk.com',
//     phone: '438-543-3400',
//   },
//   {
//     id: 60,
//     first_name: 'Fan',
//     last_name: 'Connechy',
//     email: 'fconnechy1n@hp.com',
//     phone: '591-821-8969',
//   },
//   {
//     id: 61,
//     first_name: 'Dulcy',
//     last_name: 'Cunniff',
//     email: 'dcunniff1o@smugmug.com',
//     phone: '504-154-6943',
//   },
//   {
//     id: 62,
//     first_name: 'Heida',
//     last_name: 'Sales',
//     email: 'hsales1p@google.fr',
//     phone: '357-164-9163',
//   },
//   {
//     id: 63,
//     first_name: 'Dody',
//     last_name: 'Warbrick',
//     email: 'dwarbrick1q@mail.ru',
//     phone: '970-328-3802',
//   },
//   {
//     id: 64,
//     first_name: 'Ariadne',
//     last_name: 'Kyle',
//     email: 'akyle1r@uiuc.edu',
//     phone: '652-787-0341',
//   },
//   {
//     id: 65,
//     first_name: 'Tuesday',
//     last_name: 'Quadri',
//     email: 'tquadri1s@whitehouse.gov',
//     phone: '612-857-0925',
//   },
//   {
//     id: 66,
//     first_name: 'Trefor',
//     last_name: 'Udall',
//     email: 'tudall1t@barnesandnoble.com',
//     phone: '233-328-6209',
//   },
//   {
//     id: 67,
//     first_name: 'Erny',
//     last_name: 'Vasyushkhin',
//     email: 'evasyushkhin1u@unc.edu',
//     phone: '889-966-6121',
//   },
//   {
//     id: 68,
//     first_name: 'Tabina',
//     last_name: 'Shacklady',
//     email: 'tshacklady1v@bloglines.com',
//     phone: '971-453-4958',
//   },
//   {
//     id: 69,
//     first_name: 'Levey',
//     last_name: 'Rove',
//     email: 'lrove1w@spotify.com',
//     phone: '714-704-9602',
//   },
//   {
//     id: 70,
//     first_name: 'Jakob',
//     last_name: 'Pattisson',
//     email: 'jpattisson1x@nbcnews.com',
//     phone: '321-282-8298',
//   },
//   {
//     id: 71,
//     first_name: 'Scot',
//     last_name: 'Rodell',
//     email: 'srodell1y@cdc.gov',
//     phone: '174-267-5731',
//   },
//   {
//     id: 72,
//     first_name: 'Beltran',
//     last_name: 'Donn',
//     email: 'bdonn1z@tinypic.com',
//     phone: '329-608-8118',
//   },
//   {
//     id: 73,
//     first_name: 'Gretel',
//     last_name: 'Gillbe',
//     email: 'ggillbe20@fastcompany.com',
//     phone: '712-498-4272',
//   },
//   {
//     id: 74,
//     first_name: 'Dominique',
//     last_name: 'Coger',
//     email: 'dcoger21@seesaa.net',
//     phone: '689-240-1256',
//   },
//   {
//     id: 75,
//     first_name: 'Deirdre',
//     last_name: 'Goodee',
//     email: 'dgoodee22@mail.ru',
//     phone: '566-203-5825',
//   },
//   {
//     id: 76,
//     first_name: 'Odie',
//     last_name: 'Fynes',
//     email: 'ofynes23@furl.net',
//     phone: '670-654-7760',
//   },
//   {
//     id: 77,
//     first_name: 'Pauly',
//     last_name: 'Boyer',
//     email: 'pboyer24@microsoft.com',
//     phone: '831-419-3483',
//   },
//   {
//     id: 78,
//     first_name: 'Teriann',
//     last_name: 'Bardsley',
//     email: 'tbardsley25@indiatimes.com',
//     phone: '205-682-3849',
//   },
//   {
//     id: 79,
//     first_name: 'Krissie',
//     last_name: 'Birdseye',
//     email: 'kbirdseye26@yale.edu',
//     phone: '565-150-4088',
//   },
//   {
//     id: 80,
//     first_name: 'Rodger',
//     last_name: 'Larvor',
//     email: 'rlarvor27@wiley.com',
//     phone: '447-709-9192',
//   },
//   {
//     id: 81,
//     first_name: 'Gerhard',
//     last_name: 'Jacobsen',
//     email: 'gjacobsen28@seesaa.net',
//     phone: '409-148-9072',
//   },
//   {
//     id: 82,
//     first_name: 'Clerc',
//     last_name: 'McCard',
//     email: 'cmccard29@biglobe.ne.jp',
//     phone: '579-699-1526',
//   },
//   {
//     id: 83,
//     first_name: 'Danie',
//     last_name: 'Impey',
//     email: 'dimpey2a@sogou.com',
//     phone: '756-156-2642',
//   },
//   {
//     id: 84,
//     first_name: 'Ilario',
//     last_name: 'Fuchs',
//     email: 'ifuchs2b@phpbb.com',
//     phone: '439-371-7515',
//   },
//   {
//     id: 85,
//     first_name: 'Johna',
//     last_name: 'Gobbett',
//     email: 'jgobbett2c@arizona.edu',
//     phone: '460-700-7536',
//   },
//   {
//     id: 86,
//     first_name: 'Mellisa',
//     last_name: 'Buffey',
//     email: 'mbuffey2d@stumbleupon.com',
//     phone: '622-265-1050',
//   },
//   {
//     id: 87,
//     first_name: 'Cristie',
//     last_name: 'Dukelow',
//     email: 'cdukelow2e@businessweek.com',
//     phone: '219-638-3422',
//   },
//   {
//     id: 88,
//     first_name: 'Crawford',
//     last_name: 'Cosgrive',
//     email: 'ccosgrive2f@godaddy.com',
//     phone: '530-980-0610',
//   },
//   {
//     id: 89,
//     first_name: 'Kali',
//     last_name: 'Besemer',
//     email: 'kbesemer2g@blogspot.com',
//     phone: '162-770-9642',
//   },
//   {
//     id: 90,
//     first_name: 'Aeriela',
//     last_name: 'Ussher',
//     email: 'aussher2h@163.com',
//     phone: '829-601-2748',
//   },
//   {
//     id: 91,
//     first_name: 'George',
//     last_name: 'Flanaghan',
//     email: 'gflanaghan2i@illinois.edu',
//     phone: '363-299-9172',
//   },
//   {
//     id: 92,
//     first_name: 'Philippe',
//     last_name: 'Hacking',
//     email: 'phacking2j@bizjournals.com',
//     phone: '313-214-2606',
//   },
//   {
//     id: 93,
//     first_name: 'Tommy',
//     last_name: 'Wakenshaw',
//     email: 'twakenshaw2k@jugem.jp',
//     phone: '511-824-3893',
//   },
//   {
//     id: 94,
//     first_name: 'Clair',
//     last_name: 'Bernardotte',
//     email: 'cbernardotte2l@topsy.com',
//     phone: '551-247-3400',
//   },
//   {
//     id: 95,
//     first_name: 'Blondelle',
//     last_name: 'Wraggs',
//     email: 'bwraggs2m@symantec.com',
//     phone: '768-626-3104',
//   },
//   {
//     id: 96,
//     first_name: 'Josie',
//     last_name: 'Guess',
//     email: 'jguess2n@smugmug.com',
//     phone: '285-189-2867',
//   },
//   {
//     id: 97,
//     first_name: 'Jorge',
//     last_name: 'Harpham',
//     email: 'jharpham2o@wikimedia.org',
//     phone: '382-887-0560',
//   },
//   {
//     id: 98,
//     first_name: 'Deny',
//     last_name: 'Sillick',
//     email: 'dsillick2p@bizjournals.com',
//     phone: '493-294-8194',
//   },
//   {
//     id: 99,
//     first_name: 'Erina',
//     last_name: 'Cleaver',
//     email: 'ecleaver2q@businesswire.com',
//     phone: '655-714-1759',
//   },
//   {
//     id: 100,
//     first_name: 'Jehanna',
//     last_name: 'Emeney',
//     email: 'jemeney2r@ox.ac.uk',
//     phone: '650-186-3126',
//   },
// ];

// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Pagination from 'react-bootstrap/Pagination';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Sidebar';
// import Nav from './Nav';

// function Appointment() {
//   const [contacts, setContacts] = useState(data);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [contactsPerPage, setContactsPerPage] = useState(3); // Changed to 3 contacts per page
//   const [toggle, setToggle] = useState(true);

//   const indexOfLastContact = currentPage * contactsPerPage;
//   const indexOfFirstContact = indexOfLastContact - contactsPerPage;
//   const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const Toggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="container-fluid bg-light min-vh-100">
//       <div className="row">
//         {toggle && (
//           <div className="col-4 col-md-2 position-fixed">
//             <Sidebar />
//           </div>
//         )}
//         {toggle && <div className="col-4 col-md-2"></div>}
//         <div className="col position-relative">
//           <Nav Toggle={Toggle} />
//           <div className="container">
//             <div className="row ">
//               <div className="col d-flex align-items-center py-2">
//                 <Form.Label className="mr-2">Show entries</Form.Label>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" id="dropdown-basic">
//                     {contactsPerPage}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
                   
//                     <Dropdown.Item onClick={() => setContactsPerPage(10)}>10</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(20)}>20</Dropdown.Item>
//                     {/* <Dropdown.Item onClick={() => setContactsPerPage(3)}>50</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(5)}>70</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(3)}>100</Dropdown.Item>
//                     <Dropdown.Item onClick={() => setContactsPerPage(5)}>140</Dropdown.Item> */}
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//               <div className="col-auto d-flex align-items-center">
//                 <Form className="ml-auto">
//                   <InputGroup className="my-3">
//                     <Form.Control
//                       style={{ width: '150px' }}
//                       onChange={(e) => setSearch(e.target.value)}
//                       placeholder="Search"
//                     />
//                   </InputGroup>
//                 </Form>
//                 <Button variant="primary">Create</Button>
//               </div>
//             </div>
//           </div>

//           <div className="row ">
//             <div className="col">
//               <Container>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                     <th>#</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Date</th>
//                       <th>Time</th>
//                       <th>Assign</th>
//                       <th>Appointment ID</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentContacts
//                       .filter((item) => {
//                         return search.toLowerCase() === ''
//                           ? item
//                           : item.first_name.toLowerCase().includes(search);
//                       })
//                       .map((item, index) => (
//                         <tr key={index}>
//                            <td>{item.id}</td>
//                           <td>
                         
//                             <img
//                               src={item.profile_image}
//                               alt={item.first_name}
//                               style={{ width: '50px', height: '50px', borderRadius: '50%' }}
//                             />
                           
//                           </td>

                      
//                           <td>{item.email}</td>
//                           <td>{item.date}</td>
//                           <td>{item.time}</td>
//                           <td>{item.assign}</td>
//                           <td>{item.appointment_id}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </Table>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <p>
//                     Showing {indexOfFirstContact + 1} to{' '}
//                     {Math.min(indexOfLastContact, contacts.length)} of {contacts.length} entries
//                   </p>
//                   <Pagination>
//                     <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
//                     <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{1}</Pagination.Item> 
//         <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{2}</Pagination.Item> 
//         <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>{3}</Pagination.Item>
//                     <Pagination.Next
//                       onClick={() => setCurrentPage(currentPage + 1)}
//                       disabled={indexOfLastContact >= contacts.length}
//                     />
//                   </Pagination>
//                 </div>
//               </Container>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

// const data = [
//   {
//     id:1,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:2,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:3,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:4,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:5,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:6,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:7,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:8,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:9,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:10,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:11,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:12,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:13,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:14,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:15,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   {
//     id:16,
//     first_name: 'John',
//     email: 'john.doe@example.com',
//     date: '13th Jan 2023',
//     time:'11:00AM',
//     assign:'Wendy Filson',
//     appointment_id:'ED-2064',
//     profile_image: 'https://example.com/profile_images/john_doe.jpg'
//   },
//   // Add more contact objects as needed
// ];
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