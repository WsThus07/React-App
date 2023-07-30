import React from 'react';
import './../../css/Section1.css'

function Section4() {
  return (
    <section className='bg-white pb-5 bg-contact' id="contact">
    <div className=" pb-5" >
  
    <div className=" pt-5 pr-5 ">
      <div className=" container shadow  col-5 pb-4">
        <h2 className='text-white pb-5 pl-5'>Contact Us</h2>
        <form>
          
          <div className="form-group row">
  <label htmlFor="name" className="col-md-2 col-form-label text-white">Name</label>
  <div className="col-md-10">
    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
  </div>
</div>

          <div className="form-group row">
  <label htmlFor="email" className="col-md-2 col-form-label text-white">Email</label>
  <div className="col-md-10">
    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
  </div>
</div>
<div className="form-group row">
  <label htmlFor="country" className="col-md-2 col-form-label text-white">Country</label>
  <div className="col-md-10">
    <input type="text" className="form-control" id="country" placeholder="Enter your country" />
  </div>
</div>
<div className="form-group row">
  <label htmlFor="message" className="col-md-2 col-form-label text-white">Message</label>
  <div className="col-md-10">
    <textarea className="form-control" id="message" placeholder="Enter your message"></textarea>
  </div>
</div>
<div className="form-group row">
  <div className="col-md-2"></div> {/* Empty column for spacing */}
  <div className="col-md-10 pt-3">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</div>
        </form>
      </div>
     

    </div>
  </div>
  </section>
  );
}

export default Section4;
