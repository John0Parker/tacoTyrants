import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderEdit = (props) => {
    const { id } = useParams();
    const [customerName, setCustomerName] = useState("");
    const [shell, setShell] = useState("");
    const [quantity, setQuantity] = useState('');
    const [meat, setMeat] = useState("");
    const [notes, setNotes] = useState("");
    const [orderNotFoundError] = useState("");
    const [errors, setErrors] = useState([]);
    const [top1, setTop1] = useState('');
    const [top2, setTop2] = useState('');
    const [top3, setTop3] = useState('');
    const [top4, setTop4] = useState('');
    const [top5, setTop5] = useState('');
    const [top6, setTop6] = useState('');
    const navigate = useNavigate();
    
    const checkBox1 = (event) => {setTop1(event.target.checked);}
    const checkBox2 = (event) => {setTop2(event.target.checked);}
    const checkBox3 = (event) => {setTop3(event.target.checked);}
    const checkBox4 = (event) => {setTop4(event.target.checked);}
    const checkBox5 = (event) => {setTop5(event.target.checked);}
    const checkBox6 = (event) => {setTop6(event.target.checked);}

    const handleChange1 = (event) => {
        setShell(event.target.value)
    }
    const handleChange2 = (event) => {
        setMeat(event.target.value)
    }
    useEffect((e) => {
        axios
        .get(`http://localhost:8000/api/orders/` + id)
        .then((response) => {
            console.log(response.data);
            setCustomerName(response.data.customerName);
            setShell(response.data.shell);
            setMeat(response.data.meat);
            setQuantity(response.data.quantity);
            setTop1(response.data.toppings.top1);setTop2(response.data.toppings.top2);setTop3(response.data.toppings.top3);
            setTop4(response.data.toppings.top4);setTop5(response.data.toppings.top5);setTop6(response.data.toppings.top6);
            setNotes(response.data.notes)
        })//Setting all states to the value in the API Call
        .catch((err) => {
            console.log(err.response);
            orderNotFoundError(`Order not found using that ID`);
        });
    }, []);
    
    const handleCancel = (event) =>{

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const editedOrder = {
            customerName,
            shell,
            meat, 
            quantity,
            toppings: {top1,top2,top3,top4,top5,top6},
            notes
        }
        axios
        .put(`http://localhost:8000/api/orders/${id}`, editedOrder)
        .then((response) => {
            console.log(response);
            navigate("/orders/"+ id);
        })
        .catch((err) => {
            console.log(err.response.data)
            const errArray = []
            for ( const key of Object.keys(err.response.data.errors)) {
            errArray.push(err.response.data.errors[key].message);
            }
            setErrors(errArray);
        });
    };
    return (
        <div className='container'>
            <hr />
            <div>
                <h4 className="mb-3">Authentic Mexican Taco</h4>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                    {orderNotFoundError ? (
                        <h2>
                        {orderNotFoundError} <Link to="/orders/create">Click here to add an order</Link>
                        </h2>
                    ) : null}
                <div>{
                    errors.map(( err, index) => {
                        return (
                            <p key={index}>{err}</p>
                        )}
                    )}
                </div>
                <div className='card pl-4 pr-4'>
                    <label className='form-label m-2'>Name for Pickup:</label> 
                    <input 
                        className='form-control'
                        type="string"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <label className='form-label m-2'>Shell:</label>
                    <select className="form-control" defaultValue={shell} onChange={handleChange1}>
                        <option>Hard Flour</option>
                        <option>Soft Flour</option>
                        <option>Hard Corn</option>
                        <option>Soft Corn</option>
                    </select>
                    <label className='form-label m-2'>Meat:</label>
                    <select className="form-control" defaultValue={meat} onChange={handleChange2}>
                        <option value="Carne Asada">Carne Asada</option>
                        <option value="Fish">Fish</option>
                        <option value="Pork">Pork</option>
                        <option value="Ground Beef">Ground Beef</option>
                        <option value="Shredded Chicken">Shredded Chicken</option>
                    </select>
                    <label className='form-label m-2'>Quantity:</label>
                    <input 
                        className='form-control'
                        type='number' 
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                        <label className='form-label m-2'>Toppings:</label>
                            <div className='d-flex justify-content-around'>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top1} onChange={checkBox1}/>
                                <label className='form-label'>Corn</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top2} onChange={checkBox2}/>
                                <label className='form-label'>Pico de Gallo</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top3} onChange={checkBox3}/>
                                <label className='form-label'>Jalapenos</label>
                            </h6>
                            </div>
                            <div className='d-flex justify-content-around'>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top4} onChange={checkBox4}/>
                                <label className='form-label'>Chili Verde</label>   
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top5} onChange={checkBox5}/>
                                <label className='form-label'>Red Sauce</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input" 
                                type="checkbox" checked={top6} onChange={checkBox6}/>
                                <label className='form-label'>Habanero</label>
                            </h6>
                            </div>
                    Special Notes: 
                    <input className='form-textarea'
                        type="string"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <button className="btn btn-outline-warning mt-4 m-2" type="submit">Edit this Order!</button>
                <Link to="/orders"><button className="btn btn-danger m-2" >Cancel Edit</button></Link>
                </div>
                
            </form>
        </div>
    );
    };

export default OrderEdit;