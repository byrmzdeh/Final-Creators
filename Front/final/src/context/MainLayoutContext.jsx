import React from 'react'
import BasketProvider from './BasketContex'
import WishlistProvider from './WishlistContext'
import { UserContext } from './UserContext'

const MainLayoutContext = ({ children }) => {
  return (
    // <UserContext>
      <BasketProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </BasketProvider>
    // </UserContext>
  )
}

export default MainLayoutContext
