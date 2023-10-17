import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './views/Home';
import MenuView from './views/MenuView';

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter basename='/tacotyrants'>
      {/* Include your views file as a component in the array of elements */}
        <Routes>
          
          <Route path='/*' element={[<Home/>, <MenuView/>]}/>
          {/* <Route path='/menu' element={<MenuView/>}/> */}

           {/*  EXAMPLE ROUTE PLACEHOLDER <Route element={<HomepageDisplay/>} path="/TacoTyrant" /> */}
        </Routes>
      </BrowserRouter>
    </>
  )//end return section
}//end app function
export default App
