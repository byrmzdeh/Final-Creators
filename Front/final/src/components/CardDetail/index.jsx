import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

const CardDetail = () => {
    const { id } = useParams()
    const [detail, setdetail] = useState({})


    useEffect(() => {
        fetch('http://localhost:3600/smm')
            .then((res) => res.json())
            .then((api) => {
                const itemDetail = api.find((x) => x._id === id)
                setdetail(itemDetail)
            })
    }, [])

    return (
        <div className="detail">
            <img className='img2' src={detail.img2} alt="" />
            <div className="write">
                <p><b>Name:</b> {detail.name}</p>
                <p><b>Title:</b> {detail.title}</p>
                <img src={detail.img1} alt="" />
            </div>
        </div>
    )
}

export default CardDetail
