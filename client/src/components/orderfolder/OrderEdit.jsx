import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderEdit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState([]);
    const [shell, setShell] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [meat, setMeat] = useState([]);
    const [errors, setErrors] = useState([]);
    const [notes, setNotes] = useState([]);
    const [orderNotFoundError, setOrderNotFoundError] = useState("");
    const navigate = useNavigate();
    
    const checkBox = (event) => {
        setOpen(event.target.checked);
    }

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/orders/` + id)
        .then((response) => {
            console.log(response.data);
            setName(response.data.customerName);
            setShell(response.data.shell);
            setMeat(response.data.meat);
            setQuantity(response.data.quantity)
        })
        .catch((err) => {
            console.log(err.response);
            setOrderNotFoundError(`Store not found using that ID`);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const editedStore = {
            shell,
            meat,
            quantity
        }
        axios
        .put(`http://localhost:8000/api/stores/${id}`, editedStore)
        .then((response) => {
            console.log(response);
            navigate("/stores/" +id);
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
        <form onSubmit={submitHandler}>
            {orderNotFoundError ? (
                <h2>
                {orderNotFoundError} <Link to="/orders/create">Click here to add a store</Link>
                </h2>
            ) : null}
            <Link to="/orders">go back home</Link>
            <div>{
                errors.map(( err, index) => {
                    return (
                        <p key={index}>{err}</p>
                    )}
                )}
            </div>
            <div >
                <label >Edit this store!</label>
                Customer Name
                <input
                    type="string"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                Quantity
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <br />
                Open
                <input
                    type="checkbox"
                    checked={meat}
                    onClick={checkBox}
                />
            </div>
            <button type="submit">Edit Store</button>
            </form>
    );
    };

export default OrderEdit;