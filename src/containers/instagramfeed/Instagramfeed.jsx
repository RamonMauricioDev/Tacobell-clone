import React from 'react'
import Instagramicon from './instagramfeed images/Instagram.webp'
import InstagramID from './instagramfeed images/@tacobell-txt.webp'
import './Instagramfeed.css'
const Instagramfeed = () => {
  return (
    <div className='instagramfeed__container'>
        <div className='instagramfeed__header'>
            <img src={Instagramicon} alt="" className='instagram-icon'/>
            <img src={InstagramID} alt="" className='instagram-id'/>
        </div>
        {
            //Script
        }
    </div>
  )
}

export default Instagramfeed