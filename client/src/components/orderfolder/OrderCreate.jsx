import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const OrderCreate = (props) => {
    const [customerName, setCustomerName] = useState("");
    const [shell, setShell] = useState("Hard Flour");
    const [quantity, setQuantity] = useState(1);
    const [meat, setMeat] = useState("Carne Asada");
    const [notes, setNotes] = useState("");
    const [orderNotFoundError] = useState("");
    const [errors, setErrors] = useState([]);
    const [top1, setTop1] = useState(false);
    const [top2, setTop2] = useState(false);
    const [top3, setTop3] = useState(false);
    const [top4, setTop4] = useState(false);
    const [top5, setTop5] = useState(false);
    const [top6, setTop6] = useState(false);
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrder = {
            customerName,
            shell,
            meat, 
            quantity,
            toppings: {top1,top2,top3,top4,top5,top6},
            notes
        }
        axios
        .post("http://localhost:8000/api/orders", newOrder)
        .then((response) => {
            console.log(response);
            navigate("/orders");
        })
        .catch((err) => {
            console.log(err)
            const errArray = []
            for ( const key of Object.keys(err.response.data.errors)) {
            errArray.push(err.response.data.errors[key].message);
            }
            setErrors(errArray);
        });
    };

    return(
        <div className='container'> 
            <hr />
            <div>
                <h4 className="mb-3">Authentic Mexican Taco</h4>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                    {orderNotFoundError ? (
                        <h2>
                        {orderNotFoundError} <Link to="/orders/create">Click here to place an order</Link>
                        </h2>
                    ) : null}
                <div>{
                    errors.map(( err, index) => {
                        return (
                            <p style="color: red"key={index}>{err}</p>
                        )}
                    )}
                </div>
                <div className='card pl-4 pr-4'>
                    <label className='form-label m-2'>Name for Pickup:</label> 
                    <input 
                    className='form-control'
                    type="string"
                    onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <label className='form-label m-2'>Shell:</label> 
                    <select className='form-control' onChange={handleChange1}>
                        <option>Hard Flour</option>
                        <option>Soft Flour</option>
                        <option>Hard Corn</option>
                        <option>Soft Corn</option>
                    </select>
                    <label className='form-label m-2'>Meat:</label> 
                    <select className='form-control' onChange={handleChange2}>
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
                    <div >
                    <label className='form-label m-2'>Toppings:</label>
                        <div className='d-flex justify-content-around'>
                            <h6 className='form-check'>
                            <input className="form-check-input"  type="checkbox" onChange={checkBox1}/>
                            <label className='form-label'>Corn</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input"  type="checkbox" onChange={checkBox2}/>
                                <label className='form-label'>Pico de Gallo</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input"  type="checkbox" onChange={checkBox3}/>
                                <label className='form-label'>Jalapenos</label>
                            </h6>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <h6 className='form-check'>
                                <input 
                                className="form-check-input" 
                                type="checkbox" onChange={checkBox4}/>
                                <label className='form-check-label'>Chili Verde</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input"  type="checkbox" onChange={checkBox5}/>
                                <label className='form-label'>Red Sauce</label>
                            </h6>
                            <h6 className='form-check'>
                                <input className="form-check-input"  type="checkbox" onChange={checkBox6}/>
                                <label className='form-label'>Habanero</label>
                            </h6>
                        </div>
                    </div>
                    Special Notes: 
                    <input className='form-textarea'
                        type="string"
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <button className="btn btn-outline-success mt-4 m-2" type="submit">Submit this Order!</button>
                    <Link to="/orders"><button className="btn btn-danger m-2" >Cancel Order</button></Link>
                </div>
            </form>
        </div>
    );
}

export default OrderCreate;