import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Faq from './pages/Faq';
import CardsDetail from './pages/CardsDetail';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/Add';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Error  from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:detail' element={< CardsDetail/>}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/add' element={<AdminPanel />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
