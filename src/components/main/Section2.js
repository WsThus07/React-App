import React from 'react'
import img from './../../assets/wallpaperflare.com_wallpaper (4).jpg'

const Section2 = () => {
  return (
<section>
    <div className="bg-white mb-4" id="jobs">
    <div className="container row pt-5 ml-5">
      <div className="col-md-7 mx-auto ">
        <div className="text-center ml-5">
          <h2>Search for your dream job !</h2>
        </div>
        <form>
          <div className="form-row mt-5">
            <div className="form-group col-md-4">
             
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                placeholder="Enter job title"
              />
            </div>
            <div className="form-group col-md-4">
              
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter location"
              />
            </div>
            <div className="form-group col-md-4">
            
              <input
                type="text"
                className="form-control"
                id="jobType"
                placeholder="Enter job type"
              />
            </div>
            <div className="form-group col-md-7 d-flex justify-content-end mt-3">
              <button className="btn btn-primary">Find Job</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className=' container bg-dark bg mt-5 row col-md-6 mx-auto'></div>
  </div>
 
  </section>
  )
}

export default Section2