import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContex'

const ShopCards = () => {
  const [shop, setShop] = useState([])
  const { addWishlist, checkWishlist } = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext)

  useEffect(() => {
    fetch('http://localhost:3600/cards')
      .then((res) => res.json())
      .then((api) => setShop(api))
  }, [])

  const [input, setInput] = useState('')
  const [sortBy, setSortBy] = useState(null)


  function lower(data) {
    if (typeof data === 'string') {
      return data.toLowerCase()
    }
    return data
  }


  return (
    <div className="cardss">

      <div className="filter">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Products...' />
        <div className="buttons">
          <button onClick={() => setSortBy({ preporty: 'name', asc: true })}>A-Z</button>
          <button onClick={() => setSortBy({ preporty: 'name', asc: false })}>Z-A</button>
          <button onClick={() => setSortBy({ preporty: 'price', asc: true })}>INCREASE</button>
          <button onClick={() => setSortBy({ preporty: 'price', asc: false })}>DECREASE</button>
          <button onClick={() => setSortBy(null)}>DEFAULT</button>
        </div>
      </div>
      <div className='cards-shop'>

        {shop
          .filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
          .sort((a, b) => {
            if (!sortBy) {
              return 0
            } else if (sortBy.asc) {
              return (lower(a[sortBy.preporty]) > lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) > lower(a[sortBy.preporty])) ? -1 : 0)
            } else if (sortBy.asc === false) {
              return (lower(a[sortBy.preporty]) < lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) < lower(a[sortBy.preporty])) ? -1 : 0)
            }
          })
          .map(item => (
            <div className="card-shop">
              <img width={400} src={item.image} alt="" />

              {item.image.toLowerCase().endsWith('.mp4') ? (
                <video width={550} src={item.image} autoPlay muted loop></video>
              ) : null}
              <h1 className='name'>{item.name}</h1>
              <div className="price">
                <h2>$</h2>
                <h2 className='ex'>{item.price}</h2>
                <h2 className='next'>{item.discount}</h2>
              </div>
              <div className="button">
                <button onClick={() => addBasket(item)}>Add to Cart</button>
                <div className="heart"><i className={` ${checkWishlist(item) ? "fa-solid fa-heart" : " fa-regular fa-heart"}`} onClick={() => addWishlist(item)}></i></div>
              </div>

            </div>
          ))}
      </div>
    </div>
  )
}

export default ShopCards
