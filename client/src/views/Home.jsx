import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AboutUs from '../components/general/AboutUs';
import Slideshow from '../components/general/Slideshow';
import ContactUs from '../components/general/ContactUs';


const Home = (props) => {

    return(
        <Routes>
            <Route path='/Homepage' element={[<Slideshow/>, <ContactUs/>]} />
            {/* ^^^^^^^  add contact us component to route elements above  ^^^^^^^ */}
            <Route path='/AboutUs' element={<AboutUs/>} />
        </Routes>
    )
}
export default Home;
