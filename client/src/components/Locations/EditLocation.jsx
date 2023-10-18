import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditLocation = (props) => {

    const { id } = useParams();
    const [ address, setAddress ] = useState('');
    const [ hours, setHours ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ storeNumber, setStoreNumber ] = useState('');
    const [ locationImage, setLocationImage ] = useState('');
    const [ locationErrors, setLocationErrors ] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/locations/' + id)
            .then( res => {
                setAddress(res.data.address);
                setHours(res.data.hours);
                setPhoneNumber(res.data.phoneNumber);
                setStoreNumber(res.data.storeNumber);
                setLocationImage(res.data.imageLink);
            })
            .catch( err => console.log(err))
    }, [])

    const editLocationHandler = e => {
        e.preventDefault();
        const editedLocation = {
            address,
            hours,
            phoneNumber,
            storeNumber,
            locationImage
        };
        axios.patch('http://localhost:8000/api/locations/' + id, editedLocation)
            .then( res => {
                console.log(res);
                navigate('/locations/view/' + id);
            })
            .catch( err => {
                console.log(err);
                const errArray = [];
                for(const key of Object.keys(err.response.data.errors)) {
                    errArray.push(err.response.data.errors[key].message)
                }
                setLocationErrors(errArray);
            })
    }

    return(
        <div className='container card'>
            <form className='card-body' onSubmit={editLocationHandler}>
                <h1 className='card-title'>Edit your location</h1>
                <div style={{ color: "red" }}>
                    {
                        locationErrors.map( (err, idx) => {
                            return(
                                <p key={idx}>{err}</p>
                            )
                        })
                    }
                </div>
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
                    <button className='btn bg-primary text-light'>Update Location</button>
                </div>
            </form>
        </div>
    );
}

export default EditLocation;