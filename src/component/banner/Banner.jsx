import React, {useState, useEffect} from 'react';
import './banner.css'
import image_1 from './bannerImages/TUCT_Meal.webp';
import image_2 from './bannerImages/WebsiteHomepage.webp';
import image_3 from './bannerImages/BestOfBell.webp';
import script from './changeImage';

const Banner = props => {
  
  return (
  <div className='slider'>
      <div className='slides'>

        <div className="slide first" id='first'>
          <img src={image_1} alt="" />
        </div>
        
        <div className="slide">
          <img src={image_2} alt="" />
        </div>
        <div className="slide">
          <img src={image_3} alt="" />
        </div>

        <div className='navigation-auto'>
          <div className="autobtn1"></div>
          <div className="autobtn2"></div>
          <div className="autobtn3"></div>
        </div>
      </div>
  </div>
  )
};

export default Banner;