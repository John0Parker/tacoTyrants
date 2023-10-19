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
        <div className="container">
            <div class="card my-3">
                <div class="card-header d-flex justify-content-between">
                    <h2>{`${foodItem.itemTitle}`}</h2>
                    <h2>#{`${foodItem.itemNum}`}</h2>
                </div>
                <div class="card-body">
                    <span class="d-inline-flex">
                        <img  class="img-thumbnail w-25 rounded float-start" src={`${foodItem.itemImage}`} alt={`an image of ${foodItem.itemTitle}`}/>
                        <p class="pl-3"><strong>Description:</strong> {`${foodItem.itemDesc}`}</p>
                    </span>
                        <p class="d-flex justify-content-start pl-3">
                            <strong class="mr-3">Availability:</strong>{foodItem.isDineInOnly==true? " Dine-In Only" : "Available for Dine-In and Delivery " }
                        </p>
                    <p class="d-flex justify-content-end">Price: ${foodItem.itemPrice}</p>
                </div>
                <div class="d-flex justify-content-end">
                    <Link class="btn btn-outline-warning" to={`/menu/update/${foodItem._id}`}>Update</Link>
                    <Link class="btn btn-outline-primary ml-2" to={`/menu/showalldisplay`}>See All Menu Items</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default SingleMenuItem;