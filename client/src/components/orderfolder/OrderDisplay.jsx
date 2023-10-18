import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';

const OrderDisplay = () => {
    const [order, setOrder] = useState('');
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
        <div>
            <Link to="/orders">Back to Orders</Link>
            <h2>
                Placed by: {order.customerName}
                <br />
                Meat: {order.meat}
                <br />
                Shell: {order.shell}
                <br />
                Toppings: <>{order.toppings == true ? 'Corn/' : null}
                            {order.toppings == true ? 'Pico de Gallo/' : null}
                            {order.toppings == true ? 'Jalapenos/' : null}
                            {order.toppings == true ? 'Red/' : null}
                            {order.toppings == true ? 'Green/' : null}
                            {order.toppings == true ? 'Habanero' : null}</>
                            {/*<div defer>{order.toppings == true ? 'Corn/' : null}
                            {order.toppings == true ? 'Pico de Gallo/' : null}
                            {order.toppings == true ? 'Jalapenos/' : null}
                            {order.toppings == true ? 'Red/' : null}
                            {order.toppings == true ? 'Green/' : null}
    {order.toppings == true ? 'Habanero' : null}</div> */}
                <br />
                Quantity: {order.quantity}
                <br />
                Special Notes: {order.notes != undefined ? order.notes : 'N/A'}
            </h2>
            <Link to={"/orders/edit/" + id}><button>Edit Store Details</button></Link>
        </div>
    );
};
export default OrderDisplay;