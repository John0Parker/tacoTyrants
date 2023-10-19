import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const NewMenuItem =({allFoodItems, setAllFoodItems})=>{
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

    const newMenuItemHandler = e =>{
        e.preventDefault();
        const newMenuItem={
            itemTitle,
            itemDesc,
            itemNum,
            isDineInOnly,
            itemPrice,
            itemImage
        }
        
        // axios call to create new menu item
        axios.post('http://localhost:8000/api/fooditems', newMenuItem)
            .then(res =>{
                setAllFoodItems([...allFoodItems, res.data]);
                console.log(res.data._id);
                navigate(`/menu/${res.data._id}`)
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

            <form onSubmit={newMenuItemHandler} class="container card px-0 w-50 ">
                <h2 class="card-header">Add A New Menu Item</h2>
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
                    <button class="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default NewMenuItem;