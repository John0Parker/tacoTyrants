import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';


const Home = (props) => {
// View for splash page (/tacotyrants) and About Us page (/tacotyrants/about)

    return(
        <Routes>
            {/* Set a redirect to automatically send user to /tacotyrants
            if they enter an invalid url*/}
            <Route path='/' element={<Header/>} />
            <Route path='/about' element={<AboutUs/>} />
        </Routes>
    )

}

export default Home;