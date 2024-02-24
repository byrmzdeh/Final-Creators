import React from 'react'
import ShopCards from '../../components/ShopCards'
import Cursor from '../../components/Cursor'
import NewShop from '../../components/ShopNew'
import { Helmet } from 'react-helmet'

const Shop = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NewShop />
      <ShopCards />
      <Cursor />

    </div>
  )
}

export default Shop
