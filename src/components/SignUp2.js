// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';


const SignUp2 = () => {
    

    const handleSignUp = () => {
      // Handle sign up logic
      // After successful signup, navigate to the next page
     // Replace '/next-page' with the URL of the next page
    };
  
  return (
    <div className="sign-up-page">
     <div className="content" >
      <img src="../images/logo-bamfer02 2.png" alt="" className="img-fluid" />
        <h2>SIGN UP TO DASHBOARD</h2>
        <div className='container' style={{top:'292px',left:'174px',padding:'50px', margin:'0px',fontSize:'12px',backgroundColor:'white', color:"black", width:'500px'}}>
      <h1>APPRENTICESHIP CONTRACT AGREEMENT</h1>
      <p>Further to the Apprenticeships (Form of Apprenticeship Agreement) Regulations which came into force on 6th April 2012, an Apprenticeship Agreement is required at the commencement of an apprenticeship for all new apprentices who start on or after that date.</p>
      <p className="text-sm mb-4">
        The purpose of the Apprenticeship Agreement is to:
        <ul className="list-disc list-inside">
          <li>identify the skill, trade or occupation for which the apprentice is being trained; and</li>
          <li>confirm the qualifying Apprenticeship framework that the apprentice is following.</li>
        </ul>
      </p>
   
       <p>The Apprenticeship Agreement is incorporated into and does not replace the written statement of particulars issued to the individual in accordance with the requirements of the Employment Rights Act 1996.

</p>
<p>The Apprenticeship is to be treated as being a contract of service not a contract of Apprenticeship.

</p>
<h2 className="text-lg font-semibold mb-2">Apprenticeship Particulars:</h2>
     
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
     
      <tbody>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}><label>Apprentice name:</label></td>
          <td style={{ border: '1px solid black', padding: '8px' }}><input type="text" style={{ border: 'none' }} /></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}><label>Skill, trade or occupation for which the apprentice is being trained:</label></td>
          <td style={{ border: '1px solid black', padding: '8px' }}><input type="text" style={{ border: 'none' }} /></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}><label>Relevant Apprenticeship framework and level:</label></td>
          <td style={{ border: '1px solid black', padding: '8px' }}><input type="text" style={{ border: 'none' }} /></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}><label>Start date:</label></td>
          <td style={{ border: '1px solid black', padding: '8px' }}><input type="text" style={{ border: 'none' }} /></td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}><label>Estimated completion of learning date:</label></td>
          <td style={{ border: '1px solid black', padding: '8px' }}><input type="text" style={{ border: 'none' }} /></td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
        </div>
      </div>
      <div className="side-bar" style={{ paddingLeft:'0px' }}>
      <img src="../images/Signup.png" alt="" className="img-fluid" />
</div>
     
    </div>
  );
};

export default SignUp2;
