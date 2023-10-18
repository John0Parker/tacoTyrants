import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div>
            <form onSubmit={handleSubmit}>
                    {orderNotFoundError ? (
                        <h2>
                        {orderNotFoundError} <Link to="/stores/add">Click here to add a store</Link>
                        </h2>
                    ) : null}
                <div>{
                    errors.map(( err, index) => {
                        return (
                            <p key={index}>{err}</p>
                        )}
                    )}
                </div>
                <div >
                    Name for Pickup: 
                    <input 
                    type="string"
                    onChange={(e) => setCustomerName(e.target.value)}
                    />

                    <br />
                    Shell: 
                    <select onChange={handleChange1}>
                        <option>Hard Flour</option>
                        <option>Soft Flour</option>
                        <option>Hard Corn</option>
                        <option>Soft Corn</option>
                    </select>
                    <br />
                    Meat:
                    <select onChange={handleChange2}>
                        <option value="Carne Asada">Carne Asada</option>
                        <option value="Fish">Fish</option>
                        <option value="Pork">Pork</option>
                        <option value="Ground Beef">Ground Beef</option>
                        <option value="Shredded Chicken">Shredded Chicken</option>
                    </select>
                    <br />
                    Quantity:
                    <input 
                        type='number' 
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <br />
                        Add-ons
                        <br/>
                        Corn
                        <input type="checkbox" onClick={checkBox1}/>
                        Pico de Gallo
                        <input type="checkbox" onClick={checkBox2}/>
                        Jalapenos
                        <input type="checkbox" onClick={checkBox3}/>
                        <br/>
                        Sauce
                        <br/>
                        Green
                        <input type="checkbox" onClick={checkBox4}/>
                        Red
                        <input type="checkbox" onClick={checkBox5}/>
                        Habanero
                        <input type="checkbox" onClick={checkBox6}/>
                    <br/>
                    Special Notes: 
                    <input
                        type="string"
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <br />
                </div>
                <button type="submit">Submit this Order!</button>
            </form>
        </div>
    );
}

export default OrderCreate;