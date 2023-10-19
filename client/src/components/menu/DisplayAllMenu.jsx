import { Link } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'

const DisplayAllMenu =({allFoodItems, setAllFoodItems})=>{

    useEffect(() => {
        axios.get('http://localhost:8000/api/fooditems')
            .then(res => setAllFoodItems(res.data))
            .catch(err => console.log(err))
    })
    const sortedFoodItems = allFoodItems.sort((a,b) => a.itemNum - b.itemNum)

    return(
        <>
            <div className="container">
                <h2 class="mt-5">What's Cooking?</h2>
                <div>
                    {   
                        sortedFoodItems.map(foodItem =>{
                            return(
                                <>
                                    <div class="card my-3" key={foodItem._id}>
                                        <div class="card-header d-flex justify-content-between">
                                            <h2>{`${foodItem.itemTitle}`}</h2>
                                            <h2>Item #{`${foodItem.itemNum}`}</h2>
                                        </div>
                                        <div class="card-body">
                                            <span class="d-inline-flex">
                                                <img class="img-thumbnail w-25 rounded float-start" src={`${foodItem.itemImage}`} alt={`An image of ${foodItem.itemTitle}`} />
                                                <p class="pl-3">{foodItem.itemDesc}</p>
                                            </span>
                                            <p class="d-flex justify-content-end">${foodItem.itemPrice}</p>
                                            <div class="d-flex justify-content-end">
                                                <Link class="btn btn-outline-primary" to={`/menu/${foodItem._id}`}>See more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <Link class="mb-3 btn btn-outline-info"to='/menu/showalldisplay'>Manage this Menu</Link>
                </div>
            </div>
        </>
    )
}
export default DisplayAllMenu;