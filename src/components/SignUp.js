// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    

    const handleSignUp = () => {
      // Handle sign up logic
      // After successful signup, navigate to the next page
     // Replace '/next-page' with the URL of the next page
    };
  
  return (
    <div className="sign-up-page">
     <div className="content">
      <img src="../images/logo-bamfer02 2.png" alt="" className="img-fluid" />
        <h2>SIGN UP TO DASHBOARD</h2>
        <form onSubmit={handleSignUp} >
        <label style={{ marginBottom: '10px' }}>UserName</label><br />
          <input type="text" placeholder="Type your Username" required style={{fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' , color:'#D1D1D1'}} /><br />
          <label style={{ marginBottom: '10px' }}>E-mail</label><br />
          <input type="email" placeholder="Type your E-mail" required style={{fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' , color:'#D1D1D1'}} /><br />
          <label style={{ marginBottom: '10px' }}>Password</label><br />
          <input type="password" placeholder="Type your password" required style={{ fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' }} /><br/>
         
          <label style={{ marginBottom: '10px' }}>Confirm Password</label><br />
          <input type="password" placeholder="Confirm Password" required style={{ fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' }} />

          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
           
           
           
          </div>
          <Link to="/signup2">
            <button type="submit" style={{ fontSize: '20px', padding: '10px', marginBottom: '15px', width: '400px' }}>Next</button>
          </Link>
          {/* <button type="submit"style={{fontSize: '20px', padding: '10px', marginBottom: '15px', width: '400px'}}>Next</button>
          */}
        </form>
      </div>
      <div className="side-bar" style={{ paddingLeft:'0px' }}>
      <img src="../images/Signup.png" alt="" className="img-fluid" />
</div>
     
    </div>
  );
};

export default SignUp;
