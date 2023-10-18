import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from 'react'

const SingleMenuItem =({allFoodItems, selectAllFoodItems})=>{

    const [foodItem, setFoodItem] = useState({});
    const {id} =useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/fooditems/${id}`)
            .then( res => {
                console.log(res.data)
                setFoodItem(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    
    return(
        <>
        <div className="container-fluid">
            <h2>{`${foodItem.itemTitle}`}</h2>
            <div>
                <img src={`${foodItem.itemImage}`} alt={`an image of ${foodItem.itemTitle}`} class="w-25 img-fluid" />
            </div>
            <div>
                <p>Description: {`${foodItem.itemDesc}`}</p>
                <p>Price: ${foodItem.itemPrice}</p>
            </div>
            <div>
                <button><Link to={`/menu/update/${foodItem._id}`}>Update</Link></button>
                <button><Link to={`/menu/showalldisplay`}>See All Menu Items</Link></button>
            </div>
        </div>
        </>
    )
}
export default SingleMenuItem;