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
        <Header/>
        <div className="container-fluid">
            <h2>Edit {itemTitle}</h2>
            <form onSubmit={updatedMenuItemHandler}>
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
export default UpdateMenuItem;