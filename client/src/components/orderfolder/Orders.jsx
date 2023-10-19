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
        <div className='container'>
            <hr />
            <div>
                <h4 className="mb-3">Received Orders</h4>
            </div>
            <hr />
            <table className='table table-bordered table-striped'>
                <thead className="table-success">
                    <tr className='align-items-center '>
                        <th className="text-center">Pickup Name</th>
                        <th className="text-center">Taco Shell</th>
                        <th className="text-center">Meat</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Toppings?</th>
                        <th className="text-center">Notes</th>
                        <th className="text-center">Time Placed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className=''>
                    {orders.map((order, index) => {
                        return (
                            <tr  key={order._id}>
                                <td><Link to={`${order._id}`}>{order.customerName}</Link></td>
                                <td>{order.shell}</td>
                                <td>{order.meat}</td>
                                <td>{order.quantity}</td> 
                                <td className=''>{order.toppings.top1 == true ? 'Corn-' : null}
                                {order.toppings.top2 == true ? 'Pico de Gallo-' : null}
                                {order.toppings.top3 == true ? 'Jalapenos-' : null}
                                {order.toppings.top4 == true ? 'Red Chili-' : null}
                                {order.toppings.top5 == true ? 'Chili Verde-' : null}
                                {order.toppings.top6 == true ? 'Habanero-' : null}  </td>        
                                <td>{order.notes != undefined ? order.notes : 'N/A'}</td>
                                <td>{order.createdAt}</td>
                                <td>{<button className="btn btn-outline-danger" onClick={()=> deleteFilter(order._id)}>Delete</button>}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="create"><button className="btn btn-outline-success">Order Now!</button></Link>
        </div>
    );
}

export default Orders;