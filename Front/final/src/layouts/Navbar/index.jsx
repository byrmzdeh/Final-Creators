import React, { useState } from 'react'
import './style.scss'
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const [sticky, setSticky] = useState(false)


    function stickyNavbar() {
        if (window.scrollY >= 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    window.addEventListener("scroll", stickyNavbar);
    return (
        <div className={`navbar ${sticky === true ? 'sticky' : ''}`}>
            <div className="head">
                <h1>salam</h1>
                <button>login </button>
                <button>register </button>
            </div>
            <div className="nav">
                <div className="img">
                    <img width={60} src="https://shtheme.com/demosd/upcreatorswp/wp-content/themes/upcreators/assets/svg/logo--black.svg" alt="err" />
                    <h2>Creators</h2>
                </div>
                <ul>
                    <li><NavLink to='/'>Home </NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to={'/pages'}>Pages </NavLink></li>
                    <li><NavLink to={'/events'}>Events</NavLink></li>
                    <li><NavLink to={'/our'}>Our Works</NavLink></li>
                    <li><NavLink to={'/faq'}>Faq </NavLink></li>
                    <li><NavLink to={'/shop'}>Shop </NavLink></li>
                    <li><NavLink to={'/contact'}>Contact </NavLink></li>
                </ul>
                <div className="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
