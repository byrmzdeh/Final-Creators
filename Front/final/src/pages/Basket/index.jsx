import React from 'react'
import BasketCards from '../../components/BasketCards'
import NewBasket from '../../components/NewBasket'
import { Helmet } from 'react-helmet'

const Basket = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NewBasket />
      <BasketCards />

    </div>
  )
}

export default Basket
