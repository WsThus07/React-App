import React, { useState } from 'react';
import NavBar from '../shared/Navbar';
import Footer from '../shared/Footer';



const Login = () => {
  

  return (
    <div className="hg" id="login">
      <NavBar />
      <div className="text-white text-center mt-4 pb-5">
        <h2>Sign in</h2>
      </div>

    <div className='container col-5 pb-5'>
    <form>
        

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3 text-white">
           <p className="forgot-password text-right text-white">
          Forgot <a href="#">password?</a>
        </p>
        </div>

        <div className="d-grid pb-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
       
      </form>  
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
