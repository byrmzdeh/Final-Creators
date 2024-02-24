import React from 'react'
import BasketProvider from './BasketContex'
import WishlistProvider from './WishlistContext'
import UserProvider from './UserContext'

const MainLayoutContext = ({ children }) => {
  return (
    <UserProvider>
      <BasketProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </BasketProvider>
    </UserProvider>
  )
}

export default MainLayoutContext
