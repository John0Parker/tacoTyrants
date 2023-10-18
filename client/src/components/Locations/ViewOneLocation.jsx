import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ViewOneLocation = (props) => {

    const { id } = useParams();
    const [ thisLocation, setThisLocation ] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/locations/' + id)
            .then( res => {
                setThisLocation(res.data);
                console.log(res.data);
                console.log(typeof(res.data.locationImage));
                console.log(thisLocation.locationImage);
            })
            .catch( err => console.log(err))
    }, [])

    return(
        <div className='container'>
            <div className='card mb-3 bg-warning'>
                <div className='row g-0 p-5'>
                    <div className='col-md-4'>
                        <img src={thisLocation.locationImage} className='img-fluid rounded-start' style={{maxWidth: "400px"}} alt="a photo of this Taco Tyrant Shop" />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body mx-5'>
                            <h3 class="card-title">Address: {thisLocation.address}</h3>
                            <p class="card-text">Phone Number: {thisLocation.phoneNumber}</p>
                            <p class="card-text">Hours: {thisLocation.hours}</p>
                            <p class="card-text">Report Issue: <Link className='btn bg-danger text-dark' to={'/'}>Report Form</Link></p>
                            <Link className='btn bg-success text-light' to={'/update/' + thisLocation._id}>Edit</Link>
                            <Link className='btn bg-success text-light ms-3' style={{textDecoration: 'none'}} to={'/locations/showalldisplay'}>List Display</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewOneLocation;