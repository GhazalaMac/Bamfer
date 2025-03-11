import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';

function Taskdetails({ onClose }) {
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
      status:'In progress',
      priority:'High',
      type:'Onsite',
      action:'',
      projectName:'Examron Envirenment'
      
    }
])
const cardData = [
  {
    package: "BASIC",
  
    price: "$500",
    features: ["5 Pages Design","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
},
  {
      package: "SILVER",
    
      price: "$1000",
      features: ["5 Pages Design","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
  },
  {
      package: "GOLD",
    
      price: "$1500",
      features: ["Shopping Cart, Payment Gateway ","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
  },
  {
      package: "PREMIUM",
     
      price: "$2000",
      features: ["Shopping Cart, Payment Gateway ","10 Email IDs", "Hosting (1 Year Free)", "Domain (1 Year Free)"],
  },
];

const [contacts, setContacts] = useState(data);
const [currentPage, setCurrentPage] = useState(1);
const [contactsPerPage, setContactsPerPage] = useState(3);
const [name, setName] = useState('');
const [industry, setIndustry] = useState('');
const [assign, setAssign] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [comment, setComment] = useState('');
const [activeButton, setActiveButton] = useState(1); // Set Button 1 active initially
const [uploadedFileDetails, setUploadedFileDetails] = useState(null);
const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Function to handle submitting a new comment
  const handleSubmitComment = () => {
    // Create a new comment object with current timestamp
    const timestamp = new Date().toLocaleString();
    const commentObject = {
      // profile_image: 'user_image_url',
      // first_name: 'User Name',
      time: timestamp,
      comment: newComment
    };

    // Update the comments list
    setComments([commentObject, ...comments]);

    // Clear the input field after submitting
    setNewComment('');
  };


const handleFileUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const fileInfo = {
      name: file.name,
      type: file.type,
      size: file.size,
      uploadTime: new Date().toLocaleString(),
      
    };
    setUploadedFileDetails(fileInfo);
  };
  reader.readAsDataURL(file);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const fileInfo = {
      name: file.name,
      type: file.type,
      size: file.size,
      uploadTime: new Date().toLocaleString(),
     
    };
    setUploadedFileDetails(fileInfo);
  };
  reader.readAsDataURL(file);
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
  onClose(); // Close the modal
};
const currentContacts = data.slice((currentPage - 1) * contactsPerPage, currentPage * contactsPerPage);


    return (
        <div className={`modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-auto`}>
            <div className="modal-dialog absolute right-0 top-0  sm:w-full max-w-xl text-xs ">
                <div className="modal-content bg-white rounded-md mx-auto  ">
                    <div className="modal-body overflow-y-auto overscroll-auto">
                        <div className="modal-header flex justify-between items-center border-b p-2">
                        {currentContacts.map((item, index) => (
                        <div className="modal-title flex items-center"> {/* Wrap profile image and name in a flex container */}
          <img
            src={item.profile_image}
          
            className="w-8 h-8 rounded-full mr-2" 
          />
          <div className='text-xs'>
          <span className='flex flex-col whitespace-nowrap'>{item.first_name}</span> 
          <span>Assign date: {item.date}</span> 
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#FFC107]' viewBox="0 0 576 512">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
        </div>
        ))}
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {currentContacts.map((item, index) => (
                        <div className="modal-title flex justify-between items-center border-b p-2"> {/* Wrap profile image and name in a flex container */}
        
          <div>
            <label className='text-[#A9A7A7]'>Due Date</label>
          <span className='flex flex-col whitespace-nowrap'>{item.due_date}</span> 
         
          </div>
          <div className='px-9 '>
            <label className='text-[#A9A7A7]'>Priority</label>
          <span className='flex flex-col whitespace-nowrap'>{item.priority}</span> 
          </div>
          <div className='px-9 '>
            <label className='text-[#A9A7A7]'>Status</label>
          <span className='flex flex-col whitespace-nowrap'>{item.status}</span> 
          </div>
          <div className='px-9 '>
            <label className='text-[#A9A7A7]'>Type</label>
          <span className='flex flex-col whitespace-nowrap'>{item.type}</span> 
          </div>
          <div className='px-9 '>
            <label className='text-[#A9A7A7]'>Assigned To</label>
          <span className='flex flex-col whitespace-nowrap'>{item.assign}</span> 
          </div>
         
        </div>
        ))}
                        <div className=" flex justify-between items-center border-b p-2 space-x-4 ">
                            <div className="w-1/2">
                                <button
                                    className={`w-full ${activeButton === 1 ? 'bg-[#184CA2]' : ''} font-bold py-2 px-4 rounded-full`}
                                    onClick={() => setActiveButton(1)}
                                >
                                    Details
                                </button>
                            </div>
                            <div className="w-1/2">
                                <button
                                    className={`w-full ${activeButton === 2 ? 'bg-[#184CA2]' : ''}  font-bold py-2 px-4 rounded-full`}
                                    onClick={() => setActiveButton(2)}
                                >
                                    Buy Hours
                                </button>
                            </div>
                        </div>
                        <div className="mt-2 ">
                            {/* Render content based on activeButton */}
                            {activeButton === 1 && (
    <div>
        <div className="flex items-center border-b p-2">
            <input type="checkbox" />
            <span className="ml-2">Mark as Completed</span>
        </div>
        <div className="border-b p-2">
          <h2 >Draft the new contract document for sales team</h2>
          {currentContacts.map((item, index) => (
            <div className="modal-title flex justify-between items-center py-2"> {/* Wrap profile image and name in a flex container */}
        
          <div className='text-xs '>
            <label className='text-[#A9A7A7] '>Assigned To</label>
            <div className="flex items-center py-2">
    <img
        src={item.profile_image}
        className="w-8 h-8 rounded-full mr-2"
    />
    <span className='flex flex-col whitespace-nowrap'>{item.assign}</span>
</div>
          </div>

          <div className='text-xs '>
            <label className='text-[#A9A7A7] '>Project Name</label>
            <div className="flex items-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#184CA2] mr-2'  viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
    
    <span className='flex flex-col whitespace-nowrap'>{item.projectName}</span>
</div>
          </div>
          <div className='text-xs '>
            <label className='text-[#A9A7A7] '>Total Hours</label>
            <div className="flex items-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-[#184CA2] mr-2' viewBox="0 0 512 512">
              <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
    
    <span className='flex flex-col whitespace-nowrap'>{item.time}</span>
</div>
</div>
          
        </div>
        
        ))}
        <div>
        <h2 className='font-bold py-2' >Overview:</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
type specimen book.</p>
<div className="flex flex-col">
    <div className="flex justify-between items-center">
        <h2 className='font-bold py-2'>Checklists / Sub-tasks</h2>
        <button className="hover:bg-[#184CA2]  hover:text-[#FFFFFF] border border-[#184CA2] text-[#184CA2] font-bold py-2 px-4 rounded">
            Add Checklist
        </button>
    </div>
    <div className='flex items-center py-2'>
        <input type="checkbox" />
        <span className="ml-2">Mauris vitae eros id velit imperdiet luctus.</span>
    </div>
    <div className='flex items-center py-2'>
        <input type="checkbox" />
        <span className="ml-2">Nulla id mi convallis, cursus libero vel, condimentum lectus.</span>
    </div>
    <div className='flex items-center py-2'>
        <input type="checkbox" />
        <span className="ml-2">Proin eu purus fermentum justo cursus dictum nec a turpis</span>
    </div>
    <div className='flex items-center py-2'>
        <input type="checkbox" />
        <span className="ml-2">Ut ut metus feugiat, tristique ex tincidunt, porta neque.</span>
    </div>
</div>
          </div>
        </div>
        <div className="border-b p-2">  
<h2 className='font-bold py-2' >Attachments</h2>

<div className="items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div
        className=''
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label
          htmlFor="file-upload"
          className="cursor-pointer rounded-md bg-white font-semibold "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 " viewBox="0 0 640 512">
            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
          {/* <span className="text-gray-600">{uploadedFileName ? uploadedFileName : ''}</span> */}
          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} />
        </label>
      </div>
      <div className="text-center text-sm  text-gray-600">
        <p className="pl-1">Drop files here or click to upload.</p>
      </div>
    </div>

      {uploadedFileDetails && (
  <div className="flex items-center mt-4 border border-b p-2">
    <span className=" border rounded mr-2 py-4 px-2 bg-[#184CA2] text-[#FFFFFF]">{uploadedFileDetails.type}</span>
  
    <div className="flex flex-col">
      <span className="font-bold whitespace-nowrap py-2">{uploadedFileDetails.name}</span>
     
      <span className="font-bold whitespace-nowrap ">{Math.round(uploadedFileDetails.size / 1024)} KB</span>
      <span>{new Date(uploadedFileDetails.uploadTime).toLocaleTimeString()} | {currentContacts.map((item, index) => (
     <span key={index}>
     
      {item.first_name}
      </span>
  ))} 
  </span>
      
    </div>
    
  </div>

)}
          </div>
          <div className="p-2">  
  <h2 className='font-bold py-2'>Comments</h2>
  <div className=''>
    {comments.map((comment, index) => (
      <div key={index} className="flex items-center py-2 border-b mb-4 p-2 ">
        {currentContacts.map((item, index) => (
     <span key={index}>
     <img
        src={item.profile_image}
        className="w-8 h-8 rounded-full mr-2"
    />
    </span>
        ))}

        <div className="flex flex-col w-full p-4">
          <div className="flex items-center justify-between">
          {currentContacts.map((item, index) => (
     <span key={index}>
      {item.first_name}
      </span>
  ))} 
           
            <span>{new Date(comment.time).toLocaleTimeString()}</span>
          </div>
          <p className="mt-1">{comment.comment}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex items-center border mb-4 py-2">
    <input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Add a comment..."
      className="focus:outline-none border-none w-full p-4"
    />
  </div>
  <div className="flex justify-end">
    <button
      onClick={handleSubmitComment}
      className="bg-[#184CA2] text-white px-2 py-1 hover:bg-[#FFFFFF] hover:text-[#184CA2]"
    >
      Submit
    </button>
  </div>
</div>


          
    </div>
    
)}

                            {activeButton === 2 && (
                                <div className='space-x-4'>
                            <div className='flex items-center md:mx-4 py-4'>
  <select id="service" className="text-xs mt-2 block w-full p-2 border border-[#DEDEDE] dark:border-[#DEDEDE] shadow-sm" style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>
    <option> Additional Hours</option>
    <option>Choose...</option>
    <option>...</option>
  </select>
</div>                    
                                <div className="flex flex-wrap">
                                  {[...Array(Math.ceil(cardData.length / 2))].map((_, rowIndex) => (
                                    <div key={rowIndex} className="flex justify-center md:justify-between w-full">
                                      {cardData.slice(rowIndex * 2, rowIndex * 2 + 2).map((card, index) => (
                                        <div
                                          key={index}
                                          className={`w-full md:w-1/2 shadow-l bg-[#D8E7FF] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:mx-4`}
                                        >
                                          <h2 className="text-xs font-bold text-center text-[#184CA2]">
                                            {card.package}
                                          </h2>
                                          {/* <h2 className="text-xs font-bold text-center py-8">
                                            {card.title}
                                          </h2> */}
                                          <p className="text-center text-2xl font-bold">{card.price}</p>
                                          
                                          <div className="text-center font-medium">
                                            {card.features.map((feature, index) => (
                                              <p
                                                key={index}
                                                className={`py-2 border-b border-[#ccc] mx-2 text-xs ${index === 0 ? "mt-4" : ""}`}
                                              >
                                                {feature}
                                              </p>
                                            ))}
                                          </div>
                                          <button
                                            className={`bg-[#184CA2] text-white hover:text-[#184CA2] hover:bg-white duration-150  rounded-md font-medium my-6 mx-auto px-6 py-3`}
                                          >
                                            Get Started
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                               
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Taskdetails;
