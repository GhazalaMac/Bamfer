import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  const handleSignIn = (event) => {
    // Add your sign-in logic here
  }

  return (
    <div className="flex h-screen">
      {/* Left side (form) */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-200">
      <img src="../images/logo-bamfer02 2.png" alt="" className="w-96 h-9 top-24 mb-8 " />

        <h2 className="text-2xl font-bold text-center mb-4 ">SIGN IN TO DASHBOARD</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <label className="block">User Name or E-mail</label>
          <input type="email" placeholder="Type User name or E-mail" required className="w-96 px-4 py-2 text-sm border border-gray-300 rounded" />
          <label className="block">Password</label>
        <div className="relative w-96">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            required
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-400 cursor-pointer"
              onClick={handleTogglePassword}
            />
          </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe">Remember Me</label>
            <span className="ml-auto font-bold"><a href="/reset-password" className="text-[#184CA2] text-sm">Reset Password!</a></span>
          </div>
          <button type="submit" className="w-96 bg-[#184CA2] text-white text-lg font-bold py-2 rounded"><a href="/user/dashboard">Sign In</a></button>
          <p className="text-sm text-center">Don’t have an account? <a href="/user/signup" className="text-[#184CA2] font-bold">Sign Up</a></p>
          <p className="text-sm text-center font-bold mt-4">Login With Social Media</p>
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faFacebook} className="text-[#184CA2] text-3xl mx-2" />
            <div className="bg-[#BBD5FF] rounded-full mx-2">
            <FontAwesomeIcon icon={faTwitter} className="text-[#184CA2] mx-2" />
            </div>
            <div className="bg-[#BBD5FF] rounded-full justify-center mx-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-[#184CA2]  mx-2" />
            </div>
          </div>
        </form>
      </div>
      {/* Right side (sidebar) */}
      <div className="flex-1 bg-[#184CA2] text-white flex flex-col justify-center">
  <div className="text-left px-16"> {/* Adjust the padding as needed */}
    <p className="text-5xl font-bold">Join Our<br />Community</p>
    <p className="text-sm">Welcome! Let’s Get Started</p>
  </div>
</div>

    </div>
  );
};

export default Login;
