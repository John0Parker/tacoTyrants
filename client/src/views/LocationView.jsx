import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import LocationsDashboard from '../components/Locations/LocationsDashboard';
import LocationForm from '../components/Locations/LocationForm';
import ViewOneLocation from '../components/Locations/ViewOneLocation';
import EditLocation from '../components/Locations/EditLocation';
import ShowAllDisplay from '../components/Locations/ShowAllDisplay';

const LocationView = (props) => {

    const [ allTacoLocations, setAllTacoLocations ] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/locations')
            .then( res => {
                setAllTacoLocations(res.data);
            })
            .catch( err => console.log(err))
    })

    return(
        <>
            <Routes>
                <Route path='/locations' element={<LocationsDashboard setAllTacoLocations={setAllTacoLocations} allTacoLocations={allTacoLocations}/>}/>
                <Route path='/locations/create' element={<LocationForm setAllTacoLocations={setAllTacoLocations} allTacoLocations={allTacoLocations}/>}/>
                <Route path='/locations/view/:id' element={<ViewOneLocation/>}/>
                <Route path='/locations/update/:id' element={<EditLocation/>}/>
                <Route path='/locations/showalldisplay' element={<ShowAllDisplay setAllTacoLocations={setAllTacoLocations} allTacoLocations={allTacoLocations}/>}/>
            </Routes>
        </>
    );
}

export default LocationView;