import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

const NewMenuItem =(props)=>{
    const {id} = useParams();
    const navigate = useNavigate();
    // Getters and Setters
    const [itemTitle,setItemTitle] = useState("")
    const [errors, setErrors] = useState([]);

    const newMenuItemHandler = e =>{
    e.preventDefault();
    }

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <form onSubmit={newMenuItemHandler}>
                <div style= {{color: "red"}}>
                    {
                        errors.map( (err, idx) =>{
                            return(
                                <p key={idx}>{err}</p>
                                )
                            })
                        }
                </div>
                <div>
                    <label>Item Title:</label>
                    <input type="text" value={itemTitle} onChange={e => setItemTitle(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
export default NewMenuItem;