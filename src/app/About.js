import React from 'react';
import '../assets/css/About.css'; // Create a CSS file for Menu styles

const About = () => {
    <>
    <div className="page-wrapper home-3">
      <div className="container z-index-3">
        <div className="row">
          <PersonalInfoThree />
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <HeaderThree />
            <AboutThree />
          </div>
        </div>
      </div>
    </div>
  </>
};

export default About;