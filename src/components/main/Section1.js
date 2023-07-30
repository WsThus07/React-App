import React from 'react'
import './../../css/Section1.css'

const Section1 = () => {
  return (
    <section id='home'>

    <div className=" single_slider d-flex align-items-center slider_bg_1 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="slider_text">
              <h5
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                4536+ Jobs listed
              </h5>
              <h3
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Find your Dream Job
              </h3>
              <p
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".4s"
              >
                We provide online instant cash loans with quick approval that suit your term length
              </p>
              <div
                className="sldier_btn wow fadeInLeft btn-success btn"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                Upload your Resume
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Section1