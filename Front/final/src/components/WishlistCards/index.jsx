import React, { useContext } from 'react'
import './style.scss'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContex'


const WishlistCards = () => {
    const { wishlist, addWishlist, checkWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)

    return (
        <div className='cards-shop'>
      {wishlist.map(item => (
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
            <button>Add to Cart</button>
            <div className="heart"><i className={` ${checkWishlist(item) ? "fa-solid fa-heart" : " fa-regular fa-heart"}`}  onClick={()=>addWishlist(item)}></i></div>
          </div>

        </div>
      ))}
    </div>

    )
}

export default WishlistCards