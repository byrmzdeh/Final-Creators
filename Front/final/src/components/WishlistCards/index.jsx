import React, { useContext } from 'react'
import './style.scss'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContex'


const WishlistCards = () => {
    const { wishlist, addWishlist, checkWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)

    return (
        <div className='wishlist'>
            <div className="cards">
                {wishlist.map(item => (
                    <div className="card" key={item._id}>
                        <i className={`heart ${checkWishlist(item) ? "fa-solid fa-heart" : " fa-regular fa-heart"}`} onClick={() => addWishlist(item)}></i>
                        <img src={item.image} alt="" />
                        <div className="write">
                            <h1>{item.name}</h1>
                            <div className="price">
                                <h2>$ {item.price}</h2>
                                <h2>{item.discount}</h2>
                            </div>
                        </div>
                        <button onClick={() => addBasket(item)}>ADD TO CART</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WishlistCards