import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import AllMenuItems from '../components/AllMenuItems';
import NewMenuItem from '../components/NewMenuItem';


const MenuView = (props) => {
// View for menu section (/tacotyrants/menu)

    return(
        <Routes>
            <Route path='/menu' element={<AllMenuItems/>} />
            <Route path='/menu/create' element={<NewMenuItem/>} />
        </Routes>
    )

}

export default MenuView;