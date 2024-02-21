import React, { useEffect, useState } from 'react'

const ShopCards = () => {
    const [shop , setShop] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cards')
            .then((res) => res.json())
            .then((api)=>setShop(api))
    }, [])

    

  return (
    <div>
      {shop.map(item=>(
        <div className="card">
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.discount}</p>
            <img width={300} src={item.image} alt="" />
            {item.image.toLowerCase().endsWith('.mp4') ? (
            <video src={item.image} autoPlay muted loop></video>
            ) : null}
        </div>
      ))}
    </div>
  )
}

export default ShopCards
