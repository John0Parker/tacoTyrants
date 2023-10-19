import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';

const OrderDisplay = () => {
    const [order, setOrder] = useState({
        customerName: '',
        shell: '',
        meat: '',
        quantity: 0,
        toppings: {top1: '',top2: '',top3: '',top4: '',top5: '',top6: ''},
        notes: ''
});
    const {id} = useParams();
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/orders/"+ id)
        .then((response) => {
            console.log(response.data);
            setOrder(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header d-flex align-content-center justify-content-between'>
                        <h5>Placed by: {order.customerName}</h5>
                        <h5><Link to="/orders">Back to Orders</Link></h5>
                </div> 
                <div className='card-body '>
                    <p>Meat: {order.meat}</p>
                    <p>Shell: {order.shell}</p>
                    <p>Toppings: <>
                                {order.toppings.top1 == true ? '-Corn' : null}
                                {order.toppings.top2 == true ? '-Pico de Gallo' : null}
                                {order.toppings.top3 == true ? '-Jalapenos' : null}
                                {order.toppings.top4 == true ? '-Red Chili' : null}
                                {order.toppings.top5 == true ? '-Chili Verde' : null}
                                {order.toppings.top6 == true ? '-Habanero' : null}</></p>
                                {/*<div defer>{order.toppings == true ? 'Corn/' : null}
                                {order.toppings == true ? 'Pico de Gallo/' : null}
                                {order.toppings == true ? 'Jalapenos/' : null}
                                {order.toppings == true ? 'Red/' : null}
                                {order.toppings == true ? 'Green/' : null}
                                {order.toppings == true ? 'Habanero' : null}</div> */}
                    <p>Quantity: {order.quantity}</p>
                    <p>Special Notes: {order.notes != undefined ? order.notes : 'N/A'}</p>
                    <Link to={"/orders/edit/" + id}>
                        <button 
                        className='btn btn-outline-warning'>Edit Order Details
                        </button>
                    </Link>
                </div> 
            </div>
        </div>
    );
};
export default OrderDisplay;