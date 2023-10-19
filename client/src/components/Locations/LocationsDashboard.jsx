import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LocationsDashboard = ({allTacoLocations, setAllTacoLocations}) => {


    const deleteHandler = e => {
        e.preventDefault();
        const id = e.target.id;
        axios.delete('http://localhost:8000/api/locations/' + id)
            .then( res => {
                const filteredLocations = allTacoLocations.filter( location => location._id !== id);
                setAllTacoLocations(filteredLocations);
            })
    }


    return(
        <div className='container'>
            <h2>All Locations</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Store #</th>
                        <th>Address</th>
                        <th>Hours</th>
                        <th>Phone #</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTacoLocations.map( (store, index) => {
                            const thisStoredate = new Date(store.createdAt);
                            const thisStoreDateFormat = thisStoredate.toLocaleDateString("en-US");
                            const phoneNumber = store.phoneNumber.toString();
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
                            phoneFormat(phoneNumber);
                            return(
                                <tr key={index}>
                                    <td><Link className='btn btn-outline-primary text-primary-emphasis' to={'/locations/view/' + store._id}>{store.storeNumber}</Link></td>
                                    <td>{store.address}</td>
                                    <td>{store.hours}</td>
                                    <td>{phoneArr}</td>
                                    <td>{thisStoreDateFormat}</td>
                                    <td><Link className='btn btn-outline-success text-success-emphasis' style={{textDecoration: 'none'}} to={'/locations/update/' + store._id}>Edit</Link> | <button className='btn btn-outline-danger text-danger-emphasis' onClick={deleteHandler} id={store._id}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='d-flex justify-content-center'>
                <Link className='btn bg-primary text-light mx-5' style={{textDecoration: 'none'}} to={'/locations/create'}>Create New Location</Link>
                <Link className='btn bg-primary text-light mx-5' style={{textDecoration: 'none'}} to={'/locations/showalldisplay'}>List Display</Link>
            </div>
        </div>
    );
}

export default LocationsDashboard;