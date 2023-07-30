import React from 'react'
import NavBar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Register = () => {
  return (
    <div className="hg " id="register">
        <NavBar />
        <div className="text-white text-center ">
        <h2>Sign up</h2>
      </div>

    <div className='container col-5 pb-5'>
        <form>
        

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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
 <p className="forgot-password text-right text-white pb-3">
          Already registered <a href="/login">sign in?</a>
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
       
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Register