
import React from 'react';
import './App.css';
import Navbar from './components/shared/Navbar'
import Main from './components/main/Main';
import Section1 from './components/main/Section1';
import Section2 from './components/main/Section2';
import  Section3  from './components/main/Section3';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Section4 from './components/main/Section4';
import Footer from './components/shared/Footer';


function App() {
  return (
   <div className='App'>
    <Navbar />
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer/>
      
    </Main>
   </div>

  );
}

export default App;
