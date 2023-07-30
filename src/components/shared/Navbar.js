import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaUser } from 'react-icons/fa';
import './../../css/Navbar.css'
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';


const Navbar = () => {
  const linkItems=[
    {name:'Home',route:'/home',icon:<FaHome/>,id:'home'},
    {name:'Search for a Job',route:'/Jobs',icon:<FaHome/>,id:'jobs'},
    {name:'Contact us',route:'/',icon:<FaEnvelope/>,id:'contact'},
  ];
  const [Navbar,setNavbar]=useState(false)
  const changeBackground=()=>{
    if(window.scrollY){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll',changeBackground);
  return (
    <div>
    <nav className= {Navbar ? 'navbar navbar-expand-md bg-transparent navbar-white fixed-top p-2 colorChange' : 'navbar navbar-expand-md bg-transparent navbar-white fixed-top p-4'} >
      <div className="container">
        {/* Logo on the left */}
        <div className={Navbar ? 'pl-3' : 'pl-3'}>
          <a className="navbar-brand" href="/home">Your Logo</a>
        </div>
        

        {/* Toggler button */}
        

        {/* Menu items on the right */}
        <div className={Navbar ? 'mx-2 d-flex justify-content-center' : 'mt-4 d-flex justify-content-center'} id="navbarNav">
          <div className='mr-4'>
          <ul className="navbar-nav mr-auto mr-4"> {/* Added mr-auto class */}
            { linkItems.map((link)=> 
           <ScrollLink to={link.id} className="nav-link pl-5 nav-item" smooth={true} duration={500}>{link.name}</ScrollLink>
            )

            }
          </ul>
          </div>
          {/* Login and Register buttons */}
          <div className="d-flex">
            
            <Link to="/login" className="btn btn-primary  mr-3"><FaUser/> <span className='pl-1'></span>Login</Link>
            <Link to="/register" className="btn btn-success"><FaUser/> <span className='pl-1'></span>Register</Link>
            
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
