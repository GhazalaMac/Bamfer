import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage= location.pathname=== '/signup';
  const isSignUpPage2= location.pathname=== '/signup2';

  // If it's the login page, do not render the navigation bar
  if (isLoginPage) {
    return null;
  }
  if (isSignUpPage) {
    return null;
  }
  if (isSignUpPage2) {
    return null;
  }
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-content">
        <span>Email: example@example.com</span>
        <span>Phone: +1234567890</span>
        <Link to="/user/login"><button>Get Started</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
