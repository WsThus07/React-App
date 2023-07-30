import React from 'react';
import './../../css/Footer.css'
const Footer = () => {
  return (
    <footer className=" text-light py-3 bgf ">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Contact Information */}
          <div className="col-md-4 text-left">
            <p>Contact Information</p>
            {/* Add your contact information here */}
            <p>Address: 123 Main Street</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Middle Section: Logo */}
          <div className="col-md-4 text-center">
            {/* Add your logo image here */}
            <img src="your-logo.png" alt="Logo" className="img-fluid" />
          </div>

          {/* Right Section: Copyright */}
          <div className="col-md-4 text-right">
            {/* Add your copyright information here */}
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
