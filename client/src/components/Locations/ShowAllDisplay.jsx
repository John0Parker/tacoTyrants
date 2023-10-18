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
                        <div className='card mb-3'>
                            <div className='row g-0 p-5'>
                                <div className='col-md-4'>
                                    <img src={store.locationImage} className='img-fluid rounded-start' style={{maxWidth: "400px"}} alt="a photo of this Taco Tyrant Shop" />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body mx-5'>
                                        <h3 class="card-title">Address: {store.address}</h3>
                                        <p className="card-text">Phone Number: {store.phoneNumber}</p>
                                        <p className="card-text">Hours: {store.hours}</p>
                                        <p className="card-text">Leave a review: <Link className='btn btn-outline-warning text-warning-emphasis' to={'/review/create'}>Review Form</Link></p>
                                        <Link className='btn btn-outline-success text-success-emphasis' to={'/locations/view/' + store._id}>View Taco Shop</Link>
                                        <Link className='btn btn-outline-success text-success-emphasis mx-3' to={'/locations/update/' + store._id}>Edit</Link>
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