import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import Header from '../Header';
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
        <div className="container-fluid">
            <h2>Add A New Menu Item</h2>

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
                <div>
                    <label>Item Description:</label>
                    <input type="text" value={itemDesc} onChange={e => setItemDesc(e.target.value)}/>
                </div>
                <div>
                    <label>Item Number:</label>
                    <input type="number" value={itemNum} onChange={e => setItemNum(e.target.value)}/>
                </div>
                <div>
                    <label>Dine-In Only:</label>
                    <input type="checkbox"  checked={isDineInOnly} value={isDineInOnly} onChange={e => setIsDineInOnly(e.target.checked)}/>
                </div>
                <div>
                    <label>Item Price:</label>
                    <input type="number" value={itemPrice} onChange={e => setItemPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Item Image (link):</label>
                    <input type="text" value={itemImage} onChange={e => setItemImage(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
export default NewMenuItem;