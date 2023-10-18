import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ShowAllDisplay = ({allTacoLocations, setAllTacoLocations}) => {

    useEffect( () => {
        axios.get('http://localhost:8000/api/locations')
            .then( res => {
                setAllTacoLocations(res.data);
            })
            .catch( err => console.log(err))
    }, [])

    return(
        <div className='container'>
            {
                allTacoLocations.map( (store, index) => {
                    return(
                        <div className='card mb-3 bg-warning'>
                            <div className='row g-0 p-5'>
                                <div className='col-md-4'>
                                    <img src={store.locationImage} className='img-fluid rounded-start' style={{maxWidth: "400px"}} alt="a photo of this Taco Tyrant Shop" />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body ms-5'>
                                        <h3 className="card-title">Address: {store.address}</h3>
                                        <div className=''>
                                            <p className="card-text">Phone Number: {store.phoneNumber}</p>
                                            <p className="card-text">Hours: {store.hours}</p>
                                            <p className="card-text">Report Issue: <Link className='btn bg-danger text-dark' to={'/'}>Report Form</Link></p>
                                        </div>
                                        <div className='mt-5'>
                                            <Link className='btn bg-success text-light' to={'/locations/view/' + store._id}>View Taco Shop</Link>
                                            <Link className='btn bg-success text-light ms-5' to={'/locations/update/' + store._id}>Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ShowAllDisplay;