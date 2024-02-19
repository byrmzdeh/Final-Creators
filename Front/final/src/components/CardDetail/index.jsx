import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

const CardDetail = () => {
    const { detail } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        fetch('http://localhost:3000/smm')
            .then((res) => res.json())
            .then((api) => {
                const itemDetail = api.find((x) => x._id === detail)
                setData(itemDetail)
            })
    }, [])

    return (
        <div className="detail">
            <img className='img2' src={data.img2} alt="" />
            <div className="write">
                <p><b>Name:</b> {data.name}</p>
                <p><b>Title:</b> {data.title}</p>
                <img src={data.img1} alt="" />
            </div>
        </div>
    )
}

export default CardDetail
