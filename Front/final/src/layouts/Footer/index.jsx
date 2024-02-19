import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-one">

        <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
        <h2 data-aos="fade-left" >NOW WE’RE</h2>
        <h1>TALKING</h1>
        <p>Nunc ultrices tellus et libero pretium,  <br /> id mollis diam bibendum. Pellentesque <br /> pellentesque,  erat ut sagittis <br />
          euismod,  mauris nunc iaculis ligula, <br /> eu tempus nunc ex at lacus</p>
        <div className='input-button'>
          <div className="input">
            <input type="text" placeholder='Your Contact E-mail' />
          </div>
          <button>Leave a Request</button>
        </div>

      </div>

      <div className="footer-two">
        <h2>FOLLOW US</h2>
        <div className='icons'>
          <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.youtube.com/"><i className='fa-brands fa-youtube'></i></a>
          <a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>
        </div>
        <h2>GET IN TOUCH</h2>
        <p>+1-202-555-0180</p>
        <p>email@emailaddress.com</p>
      </div>

      <div className="footer-three">
        <h2>BUSINESS ENQUIRIES</h2>
        <p>@upcreators_info</p>
        <h2>LOCATION</h2>
        <p>40 Clark Court</p>
        <p>Dearborn Heights, MI 48127</p>


      </div>

      <div className="footer-four">
        <h2>PAGES</h2>
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/'>About</Link></p>
        <p><Link to='/'>Our Works</Link></p>
        <p><Link to='/'>Events</Link></p>
        <p><Link to='/'>Contact</Link></p>
        <p><Link to='/'>Blog</Link></p>

      </div>

    </div>
  )
}

export default Footer