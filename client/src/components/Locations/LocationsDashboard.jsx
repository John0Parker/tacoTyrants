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
                            return(
                                <tr key={index}>
                                    <td><Link className='btn bg-warning' to={'/locations/view/' + store._id}>{store.storeNumber}</Link></td>
                                    <td>{store.address}</td>
                                    <td>{store.hours}</td>
                                    <td>{store.phoneNumber}</td>
                                    <td>{store.createdAt}</td>
                                    <td><Link className='btn bg-success text-light' style={{textDecoration: 'none'}} to={'/locations/update/' + store._id}>Edit</Link> | <button className='btn bg-danger' onClick={deleteHandler} id={store._id}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='d-flex justify-content-evenly'>
                <Link className='btn bg-secondary text-light' style={{textDecoration: 'none'}} to={'/locations/create'}>Create New Location</Link>
                <Link className='btn bg-secondary text-light' style={{textDecoration: 'none'}} to={'/locations/showalldisplay'}>List Display</Link>
            </div>
        </div>
    );
}

export default LocationsDashboard;