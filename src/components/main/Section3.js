import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import amazon from './../../assets/aws.png'
import Linkedin from './../../assets/linkedin.png'
import Google from './../../assets/google.png'
import Microsoft from './../../assets/microsoft.png'
import Meta from './../../assets/meta.png'


const Section3 = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
    const entreprises = [
      {name:'Linkedin',img:Linkedin},
      {name:'Google',img:Google},
      {name:'Meta',img:Meta},
      {name:'Microsoft',img:Microsoft},
      {name:'Amazon',img:amazon},
      {name:'Meta',img:Meta},
    ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 2000,
  };

  return (
    <section className='bg-white pb-5' id=''>
     <div className='container'>
        <div className='pb-5  pt-4'>
            <h2>Entreprises & Partnerships</h2>
        </div>
      
      <Slider ref={sliderRef} {...settings}>
      {entreprises.map((item) => (
              <div key={item.name} className="col-md-3 text-center mb-4">
                {/* You can display logos or just names of the partner companies */}
                <div className="partner-circle">
                  {/* You can display logos or just names of the partner companies */}
                  <img src={item.img} alt={item.name} width={110} height={85}/>
                 
                 
                </div>
              </div>
            ))}
      </Slider>
     </div>
    </section>
  );
};

export default Section3;
