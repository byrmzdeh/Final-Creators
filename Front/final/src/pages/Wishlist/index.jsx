import React from 'react'
import WishlistCards from '../../components/WishlistCards'
import NewWishlist from '../../components/NewWishlist'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NewWishlist />
      <WishlistCards />
    </div>
  )
}

export default Wishlist
