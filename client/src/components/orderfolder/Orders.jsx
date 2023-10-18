import React from 'react';
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/orders")
        .then((response) => {
            console.log(response.data);
            setOrders(response.data)
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);
    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/orders/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = orders.filter((orders, index) => orders._id !== idFromBelow)
                setOrders(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Pickup Name</th>
                        <th>Taco something</th>
                        <th>Order Submission Time</th>
                        <th>Quantity</th>
                        <th>Toppings</th>
                        <th>Notes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        return (
                            <tr key={order._id}>
                                <td><Link to={`${order._id}`}>{order.customerName}</Link></td>
                                <td>{order.shell}</td>
                                <td>{order.meat}</td>
                                <td>{order.quantity}</td>
                                <td>{order.number}</td>
{/*                                 <td>{order.toppings.top1 == true ? 'Corn' : null}</td>
                                <td>{order.toppings.top2 == true ? 'Pico de Gallo' : null}</td>
                                <td>{order.toppings.top3 == true ? 'Jalapenos' : null}</td>
                                <td>{order.toppings.top4 == true ? 'Red' : null}</td>
                                <td>{order.toppings.top5 == true ? 'Green' : null}</td>
                                <td>{order.toppings.top6 == true ? 'Habanero' : null}</td>*/}
                                <td>{order.notes != undefined ? order.notes : 'N/A'}</td>
                                <td>{<button onClick={()=> deleteFilter(order._id)}>Delete</button>}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="create"><button>Order Now!</button></Link>
        </div>
    );
}

export default Orders;