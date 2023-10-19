import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from '../Header';
import axios from 'axios';

const UpdateMenuItem =({allFoodItems, setAllFoodItems})=>{
    const {id} = useParams();
    const navigate = useNavigate();

    // Getters and Setters
    const [itemTitle,setItemTitle] = useState("")
    const [itemDesc,setItemDesc] = useState("")
    const [itemNum,setItemNum] = useState(0)
    const [isDineInOnly,setIsDineInOnly] = useState(false)
    const [itemPrice,setItemPrice] = useState(0)
    const [itemImage,setItemImage] = useState("")

    const [errors, setErrors] = useState([]);

    // axios call to get one FoodItem by ID
    useEffect(() => {
        axios.get(`http://localhost:8000/api/fooditems/${id}`)
            .then(res => {
                setItemTitle(res.data.itemTitle);
                setItemDesc(res.data.itemDesc);
                setItemNum(res.data.itemNum);
                setIsDineInOnly(res.data.isDineInOnly);
                setItemPrice(res.data.itemPrice);
                setItemImage(res.data.itemImage);
            })
            .catch(err => console.log(err))
    }, [])

    // Event handler to update all aspects of menu item when form is submitted
    const updatedMenuItemHandler = e =>{
        e.preventDefault();
        const updatedMenuItem={
            itemTitle,
            itemDesc,
            itemNum,
            isDineInOnly,
            itemPrice,
            itemImage
        }
        
        // axios call to update menu item
        axios.put(`http://localhost:8000/api/fooditems/${id}`, updatedMenuItem)
            .then(res =>{
                setAllFoodItems([...allFoodItems, res.data]);
                console.log(res.data._id);
                navigate(`/menu/${id}`)
            })
            .catch( err => {
                console.log(err.response.data);
                const errArray = []
                for (const key of Object.keys(err.response.data.errors)) {
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray);
            });
    }

    return(
        <>
        <div className="container">
            <form onSubmit={updatedMenuItemHandler} class="container card px-0 w-50 ">
                <h2 class="card-header">Edit {itemTitle}</h2>
                <div class="card-body">
                    <div className="errors" style= {{color: "red"}}>
                        {
                            errors.map( (err, idx) =>{
                                return(
                                    <p key={idx}>{err}</p>
                                    )
                                })
                            }
                    </div>
                    <div class="form-group">
                        <label class="mr-1"><strong>Item Title:</strong></label>
                        <input class="form-control" type="text" value={itemTitle} onChange={e => setItemTitle(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label class="mr-1"><strong>Item Description:</strong></label>
                        <textarea class="form-control" rows="3" type="text" value={itemDesc} onChange={ e => setItemDesc(e.target.value)} />
                    </div>
                    <div class="d-flex justify-content-around">
                        <div class="form-group">
                            <label class="mr-1"><strong>Item Number:</strong></label>
                            <input class="form-control" type="number" value={itemNum} onChange={e => setItemNum(e.target.value)}/>
                        </div>
                        <div class="form-group mx-3">
                            <label class="mr-1"><strong>Item Price ($):</strong></label>
                            <input class="form-control"cols="2" type="number" value={itemPrice} onChange={e => setItemPrice(e.target.value)}/>
                        </div>
                        <div class="form-group d-flex">
                            <label class="mr-1"><strong>Dine-In Only:</strong></label>
                            <input type="checkbox" checked={isDineInOnly} value={isDineInOnly} onChange={e => setIsDineInOnly(e.target.checked)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="mr-1"><strong>Item Image</strong> (link):</label>
                        <input class="form-control" type="text" value={itemImage} onChange={e => setItemImage(e.target.value)}/>
                    </div>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-outline-success">Submit</button>
                        <Link class="btn btn-outline-primary" to="/menu">Back to Menu</Link>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default UpdateMenuItem;