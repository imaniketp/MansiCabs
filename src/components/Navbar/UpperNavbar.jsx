import React from 'react'
import './UpperNavbar.css'
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

function UpperNavbar() {
  return (
    <div className='upperNavContainer'>
        <h5>TAG LINE</h5>
        <div className='upperNavRight'>
            <div><a href='tel:+91 9075201035'>+91 9075201035</a></div>
            
            <div className='socialIcons'>
            <FaFacebookF className='fb'/>
            <FaTwitter className='twitter'/>
            <FaGooglePlusG className='gmail'/>
            </div>
        </div>
    </div>
  )
}

export default UpperNavbar