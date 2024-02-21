import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Faq from './pages/Faq';
import CardsDetail from './pages/CardsDetail';
import Shop from './pages/Shop';
import Add from './pages/Add';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:detail' element={< CardsDetail/>}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/add' element={<Add />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
