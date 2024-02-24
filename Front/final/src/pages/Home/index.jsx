import React from 'react'
import Full from '../../components/Full'
import Premier from '../../components/Premier'
import Thinks from '../../components/Thinks'
import Join from '../../components/Join'
import Brand from '../../components/Brand'
import Media from '../../components/Media'
import Cards from '../../components/Cards'
import CompanySlider from '../../components/Company-Slider'
import Cursor from '../../components/Cursor'
import Collab from '../../components/Collab'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Full />
      <Premier />
      <Thinks />
      <Join />
      <Brand />
      <Media />
      <Cards />
      <Collab />
      <CompanySlider />
      <Cursor />
    </div>
  )
}

export default Home
