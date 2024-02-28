// Content.js
import React from 'react';
import './content.css';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';



const Content = () => {
  return (
    <div className="content">
      <div className="header-container">
      <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
      </div>
      <div className='first-des'>
      <div className='second-des'>
      <ul>
        <li>
      <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
      </li>
      <li>
    <p> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
    </li>
    </ul>
    </div>
    </div>
    
    <div className="image-container">
        <img src={image1} alt="Image 1" className="content-image" />
        <img src={image2} alt="Image 2" className="content-images" />
      </div>
      <div className="third-des">
      <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018".</strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
      <div className='four-des'>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
    </div>
    <div className='image-div'>
      <img src={image3} alt='Image 3' className='image-div' />
    </div>
    
    </div>
  );
}

export default Content;
