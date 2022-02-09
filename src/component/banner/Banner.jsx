import React, {useState, useEffect} from 'react';
import './banner.css'
import image_1 from './bannerImages/TUCT_Meal.webp';
import image_2 from './bannerImages/WebsiteHomepage.webp';
import image_3 from './bannerImages/BestOfBell.webp';

const Banner = () => {
  return (
  <div>
      <img src={image_1} alt="" className='Banner__image'/>
  </div>
  )
};

export default Banner;
