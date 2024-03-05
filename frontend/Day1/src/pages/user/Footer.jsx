import React from 'react'
import './Footer.css';
import abc from '../../assets/images/background.jpg'
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={abc} />
        </div>
        <div>
      <p className='foot'>For enquiries about our English certification courses, please contact us at:</p>
      <p className='foot'>Email: info@example.com</p>
      <p className='foot'>Phone: +1234567890</p>
      <p className='foot'>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  )
}

export default Footer
