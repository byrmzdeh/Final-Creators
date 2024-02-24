import React, { useContext, useState } from 'react'
import './style.scss'
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from '../../context/UserContext';



const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    let location = useLocation();
    const { logOut, decode } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)

    function toggleNavbar() {
        setIsOpen(!isOpen)
    }



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

                    {decode && decode.role === 'admin' ?
                        <>
                            <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                            <li><NavLink to={"/add"}>Add</NavLink></li>
                        </>
                        :
                        decode && decode.role === 'user' ?
                            <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                            : null
                    }

                </ul>

                {decode && (decode.role === 'admin' || decode.role === 'user') ?
                    <div className="icon">
                        <Link to={'/wishlist'}><i class="fa-regular fa-heart"></i></Link>
                        <Link to={'/basket'}><i class="fa-solid fa-basket-shopping"></i></Link>
                    </div>
                    : null
                }

                {decode ?
                    <div className='loginnn'>
                        <div className="profile"><i class="fa-regular fa-user"></i> Profile</div>
                        <div onClick={() => logOut()}><p>Logout</p></div>
                    </div>
                    :
                    <div className='head'>
                        <li><NavLink to='/login'>Login </NavLink></li>
                        <li><NavLink to='/register'>Register </NavLink></li>
                    </div>}
            </div>

            <div className="resNavbar">
                <div className="row">
                    <div className="logo">
                        <NavLink to={"/"}>
                            <img
                                src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
                                alt=""
                            />
                        </NavLink>
                    </div>
                    {decode ?
                        <div className='loginnn'>
                            <div className="profile"><i class="fa-regular fa-user"></i> Profile</div>
                            <div onClick={() => logOut()}><p>Logout</p></div>
                        </div>
                        :
                        <div className='head'>
                            <li><NavLink to='/login'>Login </NavLink></li>
                            <li><NavLink to='/register'>Register </NavLink></li>
                        </div>}
                    <div className="bars" onClick={toggleNavbar}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className={`resMenu ${isOpen ? "open" : ""} `}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/faq"}>Faq</NavLink>
                        </li>
                        {decode && decode.role === 'admin' ?
                            <>
                                <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                                <li><NavLink to={"/add"}>Add</NavLink></li>
                            </>
                            :
                            decode && decode.role === 'user' ?
                                <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                                : null
                        }

                        {decode && (decode.role === 'admin' || decode.role === 'user') ?
                            <div className="icon">
                                <li> <NavLink to={'/basket'}>Basket</NavLink></li>
                                <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
                            </div>
                            : null
                        }
                    </ul>



                </div>
            </div>
        </div >
    )
}

export default Navbar
