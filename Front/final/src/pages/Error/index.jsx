import React from 'react'
import './style.scss'
import Cursor from '../../components/Cursor'
import Navbar from '../../layouts/Navbar'
import { Helmet } from 'react-helmet'

const Error = () => {
    return (
        <div className='error'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cursor />
            <div className="write">
                <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
                <p>404 <img width={300} src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/06/girls.png" alt="" /> ,<br />
                    PAGE NOT <br />
                    FOUND</p>
            </div>

            <button><a href="/">Return Home</a></button>
        </div>
    )
}

export default Error
