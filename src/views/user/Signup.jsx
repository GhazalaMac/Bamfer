import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [formStep, setFormStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleImageClear = () => {
    setUploadedImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (formStep === 2) {
      handleSubmit();
    } else {
      setFormStep((prevStep) => prevStep + 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    // Redirect to dashboardpage
    console.log("Form submitted!");
    // Redirect to the dashboard page
    window.location.href = "/user/dashboard";
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Render the appropriate step based on formStep */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {formStep === 1 && (
          <section className="flex flex-col space-y-3">
            <img src="../images/logo-bamfer02 2.png" alt="" className="w-96 h-9 top-24 mb-8" />
            <h2 className="text-2xl font-bold text-center mb-4">SIGN IN TO DASHBOARD</h2>
            <label className="block">UserName</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              name="username"
              onChange={handleInputChange}
              className="w-96 px-4 py-2 text-sm border border-gray-300 rounded"
              required
            />
            <label className="block">E-mail</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              className="w-96 px-4 py-2 text-sm border border-gray-300 rounded"
              required
            />
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              className="w-96 px-4 py-2 text-sm border border-gray-300 rounded"
              required
            />
            <label className="block">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              className="w-96 px-4 py-2 text-sm border border-gray-300 rounded"
              required
            />
            <button
              type="button"
              onClick={handleNext}
              className="w-96 bg-[#184CA2] text-white text-lg font-bold py-2 rounded"
            >
              Next
            </button>
          </section>
        )}

        {formStep === 2 && (
          <section className="flex-1 flex flex-col  ">
            <img src="../images/logo-bamfer02 2.png" alt="" className="w-96 h-9 top-24 mb-8" />
            <h2 className="text-2xl font-bold text-center mb-4">SIGN IN TO DASHBOARD</h2>
           
            <div className="container mx-auto p-4 bg-white rounded-md shadow-md">
  <h2 className="text-lg font-bold text-center mb-2">APPRENTICESHIP CONTRACT AGREEMENT</h2>
  <p className="text-xs mb-2">
    Further to the Apprenticeships (Form of Apprenticeship Agreement) Regulations which came into force on 6th April 2012, an Apprenticeship Agreement is required at the commencement of an apprenticeship for all new apprentices who start on or after that date.
  </p>
  <p className="text-xs mb-2">
    The purpose of the Apprenticeship Agreement is to:
    <ul className="list-disc list-inside">
      <li>identify the skill, trade or occupation for which the apprentice is being trained; and</li>
      <li>confirm the qualifying Apprenticeship framework that the apprentice is following.</li>
    </ul>
  </p>
  <p className="text-xs mb-2">
    The Apprenticeship Agreement is incorporated into and does not replace the written statement of particulars issued to the individual in accordance with the requirements of the Employment Rights Act 1996.
  </p>
  <p className="text-xs mb-2">
    The Apprenticeship is to be treated as being a contract of service not a contract of Apprenticeship.
  </p>
  <h2 className="text-sm font-semibold mb-1">Apprenticeship Particulars:</h2>
  <table className="border border-black border-collapse text-xs mb-2">
    {/* Table content */}
    <tbody>
        <tr>
          <td className="border border-black px-4 py-2"><label>Apprentice name:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2"><label>Skill, trade or occupation for which the apprentice is being trained:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2"><label>Relevant Apprenticeship framework and level:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2"><label>Start date:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2"><label>Estimated completion of learning date:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
      </tbody>
  </table>
  <h2 className="text-sm font-semibold mb-1">Signatories:</h2>
  <table className="border border-black border-collapse text-xs mb-2">
    {/* Table content */}
    <tbody>
        <tr>
          <td className="border border-black px-4 py-2"><label>Apprentice:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
          <td className="border border-black px-4 py-2"><label>Date:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
        <tr>
          <td className="border border-black px-4 py-2"><label>Employer:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
          <td className="border border-black px-4 py-2"><label>Date:</label></td>
          <td className="border border-black px-4 py-2"><input type="text" className="border-none" /></td>
        </tr>
      </tbody>
  </table>
</div>
<h3 className="text-sm mb-2">Signature:</h3>
      <div className="relative w-full">
        <button className="absolute top-0 right-0" onClick={handleImageClear}>Clear</button>
        <input type="file" accept="image/*" className="mb-2 cursor-pointer" onChange={handleImageUpload} />
        {uploadedImage && (
          <img src={uploadedImage} alt="Uploaded" className="max-w-100 max-h-100 absolute bottom-0" />
        )}
      </div>
      <div className="flex justify-center space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setFormStep(formStep - 1)}>Previous</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
    </div>
    <p className="mt-4 text-sm text-center">Already User? <Link to="./login" className="text-blue-500">Sign in</Link></p>
  </section>
           
       
        )}

      </div>


      
      <div className="flex-1 flex justify-center items-center">
        <img
          src="../images/Signup.png"
          alt=""
          className="img-fluid "
        />
      </div>
      
    </div>
  );
};

export default Signup;
