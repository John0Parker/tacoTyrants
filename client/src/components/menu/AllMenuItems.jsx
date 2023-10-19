import  { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";


const AllMenuItems =({allFoodItems, setAllFoodItems})=>{
    const navigate = useNavigate();
    // sort menu by their item numbers descending
    const sortedFoodItems = allFoodItems.sort((a,b) => a.itemNum - b.itemNum)

const deleteFoodItemHandler = e => {
    const idToDelete = e.target.id;
    axios.delete(`http://localhost:8000/api/fooditems/${idToDelete}`)
        .then(res => {
            const filteredFoodItems = allFoodItems.filter(
                foodItem => foodItem._id !==idToDelete);
            setAllFoodItems(filteredFoodItems);
            navigate(`/menu`);
        })
}

    return(
        <>
        <div class="container">
            <h3 class="mb-3 ">Menu Manager</h3>
            <table class="table table-hover text-center">
                <tr class="thead-light">
                    <th>Item Title</th>
                    <th>Item Number</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Submitted On</th>
                    <th>Actions</th>
                </tr>
                {   
                    sortedFoodItems.map(foodItem =>{
                        return(
                            <>
                            <tr key={foodItem._id}>
                                <td><Link to={`/menu/${foodItem._id}`}>{foodItem.itemTitle}</Link></td>
                                <td>{foodItem.itemNum}</td>
                                <td>{foodItem.itemDesc}</td>
                                <td>${foodItem.itemPrice}</td>
                                <td>{foodItem.createdAt}</td>
                                <td class="d-flex">
                                    <Link class="btn btn-outline-warning" to={`/menu/update/${foodItem._id}`}>Update</Link>
                                    <button class="btn btn-outline-danger ml-2" onClick={deleteFoodItemHandler} id={foodItem._id}>Delete</button>
                                </td>
                            </tr>
                            </>
                        )
                    }) 
                }
            </table>
            <Link class="btn btn-outline-success" to="/menu/create">Add a Menu Item</Link>
            <Link class="btn btn-outline-primary ml-3" to="/menu">Back to Menu</Link>
        </div>
        </>
        
    )
}
export default AllMenuItems;