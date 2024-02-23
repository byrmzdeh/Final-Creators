import React, { useState } from 'react'
import './style.scss'
import { Link, NavLink, useLocation } from "react-router-dom";



const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    let location = useLocation();



    function stickyNavbar() {
        if (window.scrollY >= 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    window.addEventListener("scroll", stickyNavbar);
    return (
        <div className={`navbar
         ${sticky === true
                ? "sticky"
                : "" || location.pathname === "/add"
                    ? "navbarBcgColor"
                    : "" || location.pathname === "/faq"
                        ? "navbarBcgColor"
                        : ""}
              `}>
            <div className="head">
                <h1>salam</h1>
                <li><NavLink to='/login'>Login </NavLink></li>
                <li><NavLink to='/register'>Register </NavLink></li>
            </div>
            <div className="nav">
                <div className="img">
                    <img width={60} src="https://shtheme.com/demosd/upcreatorswp/wp-content/themes/upcreators/assets/svg/logo--black.svg" alt="err" />
                    <h2>Creators</h2>
                </div>
                <ul>
                    <li><NavLink to={"/"}>  Home </NavLink></li>
                    <li className='pages'><NavLink to={""}>  Pages </NavLink>
                        <ul id='submenu'>
                            <li><NavLink to={"/faq"}>  Faq </NavLink></li>
                            <li><NavLink to={"*"}>  Error Page </NavLink></li>
                        </ul>
                    </li>


                    <li><NavLink to={"/shop"}>  Shop </NavLink></li>
                    <li><NavLink to={"/contact"}>  Contact </NavLink></li>
                    <li><NavLink to={"/add"}>  Add </NavLink></li>






                </ul>
                <div className="icon">
                    <Link to={'/wishlist'}><i class="fa-regular fa-heart"></i></Link>
                    <Link to={'/basket'}><i class="fa-solid fa-basket-shopping"></i></Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar
