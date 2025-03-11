import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Nav from '../../components/Dashboard/Nav';
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";


function Profile() {
    const [toggle, setToggle] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [step, setStep] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        Info: 'User',
        email: 'johndoe25@gmail.com',
        phoneNumber: '+1-646-888-8953',
        Website: 'www.johndoe.com',
        AnnualRevenue: '$ 24000 USD',
        Profession: 'IT Solution',
        imageSrc: "..//images/UserProfile.png",
        password: '',
        confirmPassword: '',
        Address: '',
        Country: '',
        CompanyName: '',

    });

    const [showCalendar, setShowCalendar] = useState(true); // New state to control calendar visibility
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState('');
    const [visibility, setVisibility] = useState('onlyMe');
    const [imageUploaded, setImageUploaded] = useState(false);
    const [showFooter, setShowFooter] = useState(false);

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageUploaded(true);
    }
  };

    const handleVisibilityChange = (event) => {
        setVisibility(event.target.value);
    };

    const handleSelectChange = (event) => {
        const option = event.target.value;
        setCurrentOption(option);
        if (option && !selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleRemoveOption = (optionToRemove) => {
        setSelectedOptions(selectedOptions.filter(option => option !== optionToRemove));
    };

    const handleUpperCalendarChange = (date) => {
        setSelectedDate(date);
    };
    const Toggle = () => {
        setToggle(!toggle);
    };

    const handleNext = () => {
        setStep(step + 1);
        setShowCalendar(false); // Hide calendar when moving to next step
    };

    const handleBack = () => {
        setStep(step - 1);
        setShowCalendar(true); // Show calendar when moving back
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setStep(1); // Reset to first step after saving
    };

    const renderFormStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="p-2 py-4 flex items-center">
                                        <img src={formData.imageSrc} alt="Profile" className="inline-block mr-2" />
                                        <div className="flex flex-col whitespace-nowrap px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="text-[#184CA2] me-1 ">{formData.firstName}</span>
                                                <span className="text-[#184CA2]">{formData.lastName}</span>
                                            </div>
                                            <div>
                                                <span>{formData.Info}</span>
                                            </div>
                                            <div>
                                                <span className="text-[#184CA2]">{formData.Profession}</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <div className="flex justify-between items-center p-2">
                                    <h2 className="text-lg">Personal Information</h2>
                                    <button title="Edit" onClick={handleNext} className="border px-2 py-2 rounded flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 me-2 fill-[#184CA2] hover:fill-[#184CA2]" viewBox="0 0 512 512">
                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7.8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                        </svg>
                                        Edit
                                    </button>
                                </div>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="bg-[#ECF3F2] me-2  rounded-full p-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 inline-block  text-[#184CA2]" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                                            </svg>
                                        </span>
                                        Email
                                        <br />
                                        <span className="text-[#184CA2] whitespace-nowrap px-11 py-4">{formData.email}</span>

                                    </td>

                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="bg-[#ECF3F2] me-2 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 inline-block  text-[#184CA2]" viewBox="0 0 448 512">

                                                <path fill="#184CA2" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                                            </svg>
                                        </span>
                                        Phone No
                                        <br />
                                        <span className="text-[#184CA2] whitespace-nowrap px-11 py-4">{formData.phoneNumber}</span>
                                    </td>

                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="bg-[#ECF3F2] me-2 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 inline-block  text-[#184CA2]" viewBox="0 0 448 512">
                                                <path fill="#184CA2" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                                            </svg>
                                        </span>
                                        Website
                                        <br />
                                        <span className="text-[#184CA2] whitespace-nowrap px-11 py-4 ">{formData.Website}</span>
                                    </td>

                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="bg-[#ECF3F2] me-2 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 inline-block  text-[#184CA2]" viewBox="0 0 448 512">
                                                <path fill="#184CA2" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                                            </svg>
                                        </span>
                                        Annual Revenue
                                        <br />
                                        <span className="text-[#184CA2] whitespace-nowrap px-11 py-4">{formData.AnnualRevenue}</span>
                                    </td>

                                </tr>

                            </tbody>
                        </table>

                    </div>

                );
            case 2:
                return (
                    <div>
                        <form class="w-full">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none "id="grid-first-name" type="text" placeholder="Jane"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="Doe"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="johndoe25@gmail.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone No</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="+1-646-888-8953"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="password" placeholder="*******"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="password" placeholder="*********"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="add your address here"
                                        name="Address"
                                        value={formData.Address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="+1-646-888-8953"
                                        name="Country"
                                        value={formData.Country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Your Skills</label>
                                <select
                                    className="p-2 border border-gray-300 rounded-md w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                   
                                    value={currentOption}
                                    onChange={handleSelectChange}
                                >
                                    <option value="">Select an option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                {selectedOptions.length > 0 && (
                                    <div className="mt-2 flex flex-wrap">
                                        {selectedOptions.map(option => (
                                            <div key={option} className="flex items-center mr-2 mb-2  p-2 ">
                                                <span>{option}</span>
                                                <button
                                                    className="ml-2 text-red-500"
                                                    onClick={() => handleRemoveOption(option)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div class="flex flex-col mt-2">
                                <label htmlFor="name"  className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Profession</label>
                                <input
                                   className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="Web Developer"
                                    name="Profession"
                                    value={formData.Profession}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6 mt-2">
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company Name</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="IT Technology"
                                        name="CompanyName"
                                        value={formData.CompanyName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
                                    <input
                                        className="appearance-none block w-full bg-[#FFFFFF] text-[#323232] border border-[#DEDEE4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none " type="text" placeholder="http//johndoe.com"
                                        name="Website"
                                        value={formData.Website}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div >
                            <label htmlFor="visibility" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Who Will Be Able To See Your Profile?</label>
                                <div id="visibility" className="flex items-center">
                                    <input
                                        type="radio"
                                        id="onlyMe"
                                        value="onlyMe"
                                        checked={visibility === 'onlyMe'}
                                        onChange={handleVisibilityChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="onlyMe" className="mr-4">Only Me</label>

                                    <input
                                        type="radio"
                                        id="onlyFriends"
                                        value="onlyFriends"
                                        checked={visibility === 'onlyFriends'}
                                        onChange={handleVisibilityChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="onlyFriends" className="mr-4">Only Friends</label>

                                    <input
                                        type="radio"
                                        id="everyone"
                                        value="everyone"
                                        checked={visibility === 'everyone'}
                                        onChange={handleVisibilityChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="everyone">Everyone</label>
                                </div>
                            </div>
                            <div className="col-span-full mt-4">
      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
        Upload Your Profile Picture
      </label>
      
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" viewBox="0 0 512 512">
              <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
            {imageUploaded && <span className="text-gray-600">Uploaded Image</span>}
          </div>
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
    

                        </form>

                        <div className='mt-2'>
                        <button className='border border-[#184CA2]  rounded p-2 me-4 bg-[#184CA2] text-[#FFFFFF]' onClick={handleSubmit}>Save Profile</button>
                        
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

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
      <a href="#" className=" font-semibold">Profile</a>
    </Breadcrumbs>
    </div>
                <div className="mb-9 flex-1 h-full">
                    <div className="flex flex-row gap-4">
                        <div className="md:w-full font-normal text-xs">
                            <div className="bg-white shadow-sm p-4 font-normal text-sm">
                                {renderFormStep()}
                            </div>
                        </div>
                        {step !== 2 && ( // Only render the calendar if the step is not 2 (edit step)
                            <div className="md:w-6/12 font-normal text-xs ml-4">
                                <div className="bg-white p-2 mb-2">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-sm">Make An Appointment</h2>
                                    </div>
                                    <Calendar className="rounded-md border mb-8" mode="single" onChange={handleUpperCalendarChange} value={selectedDate} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="bottom-0 left-0  right-0 bg-white text-[#B6B6B6] text-center text-xs absolute p-2">
                &copy; {new Date().getFullYear()} Bamfer Consulting llc. All Right Reserved.
            </div>
            </div>
        </div>
    );
}

export default Profile;
