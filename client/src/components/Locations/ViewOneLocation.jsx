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
            })
            .catch( err => console.log(err))
        }, [])

    let locationPhoneNumber = '' + thisLocation.phoneNumber;
    let phoneArr = [];
    const phoneFormat = phoneNum => {
        for(let i = 0; i < phoneNum.length; i++) {
            if(i == 2 || i == 5) {
                phoneArr.push(phoneNum[i]);
                phoneArr.push('-');
            } else {
                phoneArr.push(phoneNum[i]);
            }
        }
        return phoneArr;
    }
    phoneFormat(locationPhoneNumber);

    return(
        <div className='container'>
            <div className='card mb-3'>
                <div className='row g-0 p-5'>
                    <div className='col-md-4'>
                        <img src={thisLocation.locationImage} className='img-fluid rounded-start' style={{maxWidth: "400px"}} alt="a photo of this Taco Tyrant Shop" />
                    </div>
                    {
                        
                    }
                    <div className='col-md-8'>
                        <div className='card-body mx-5'>
                            <h3 className="card-title">Address: {thisLocation.address}</h3>
                            <p className="card-text">Phone Number: {phoneArr}</p>
                            <p className="card-text">Hours: {thisLocation.hours}</p>
                            <p className="card-text">Leave a Review: <Link className='btn btn-outline-warning text-warning-emphasis' to={'/review/create'}>Review Form</Link></p>
                            <Link className='btn btn-outline-success text-success-emphasis mx-3' style={{textDecoration: 'none'}} to={'/locations/showalldisplay'}>List Display</Link>
                            <Link className='btn btn-outline-success text-success-emphasis' to={'/locations/update/' + thisLocation._id}>Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewOneLocation;