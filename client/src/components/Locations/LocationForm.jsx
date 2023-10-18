import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LocationForm = ({allTacoLocations, setAllTacoLocations}) => {

    const [ address, setAddress ] = useState('');
    const [ hours, setHours ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ storeNumber, setStoreNumber ] = useState('');
    const [ locationImage, setLocationImage ] = useState('');
    const navigate = useNavigate();

    const createLocationHandler = e => {
        e.preventDefault();
        const newLocation = {
            address,
            hours,
            phoneNumber,
            storeNumber,
            locationImage
        }
        axios.post('http://localhost:8000/api/locations', newLocation)
            .then( res => {
                console.log(res.data);
                setAllTacoLocations([...allTacoLocations, newLocation]);
                navigate('/locations');
            })
            .catch( err => console.log(err) )
    }

    return(
        <div className='container'>
            <h2>Create a new location</h2>
            <form onSubmit={createLocationHandler}>
                <div>
                    <label className='form-label'>Address</label>
                    <input className='form-control' value={address} onChange={ e => setAddress(e.target.value) }/>
                </div>
                <div>
                    <label className='form-label'>Hours</label>
                    <input className='form-control' value={hours} onChange={ e => setHours(e.target.value) }/>
                </div>
                <div>
                    <label className='form-label'>Phone Number</label>
                    <input className='form-control' value={phoneNumber} onChange={ e => setPhoneNumber(e.target.value) }/>
                </div>
                <div>
                    <label className='form-label'>Store Number</label>
                    <input className='form-control' value={storeNumber} onChange={ e => setStoreNumber(e.target.value) }/>
                </div>
                <div>
                    <label className='form-label'>Image Link</label>
                    <input className='form-control' type='text' value={locationImage} onChange={ e => setLocationImage(e.target.value) }/>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn text-light bg-primary'>Create Location</button>
                </div>
            </form>
        </div>
    );
}

export default LocationForm;