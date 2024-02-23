import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const Cards = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('http://localhost:3600/smm')
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])
    return (
        <div  className='cards'>
            {data.map((item) => (
                <div  className="card"  key={item._id}>
                    <div className="view">
                        <img className='img' width={200} src={item.img2} alt="" />
                        <div className="write">
                            <h2 >{item.name}</h2>
                            {/* <p>{item.title}</p> */}
                            <Link to={'/card/'+item._id}><button>Read More <i class="fa-solid fa-arrow-right"></i></button></Link>
                        </div>
                    </div>
                    <div  className="opacity">
                        <img className='image' src={item.img1} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                </div>


            ))}
        </div>
    )
}

export default Cards