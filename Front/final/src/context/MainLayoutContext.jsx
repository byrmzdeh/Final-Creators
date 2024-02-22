import React from 'react'
import BasketProvider from './BasketContex'
import WishlistProvider from './WishlistContext'

const MainLayoutContext = ({children}) => {
  return (
    <BasketProvider>
        <WishlistProvider>
            {children}
        </WishlistProvider>
    </BasketProvider>
  )
}

export default MainLayoutContext
