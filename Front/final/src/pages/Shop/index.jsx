import React from 'react'
import ShopCards from '../../components/ShopCards'
import Cursor from '../../components/Cursor'
import NewShop from '../../components/ShopNew'

const Shop = () => {
  return (
    <div>
      <NewShop/>
      <ShopCards />
      <Cursor/>

    </div>
  )
}

export default Shop
