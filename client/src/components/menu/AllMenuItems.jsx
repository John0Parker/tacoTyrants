import { Link, useNavigate } from "react-router-dom";
import Header from '../Header'
import axios from "axios";

const AllMenuItems =({allFoodItems, setAllFoodItems})=>{
    const navigate = useNavigate();

const deleteFoodItemHandler = e => {
    const idToDelete = e.target.id;
    axios.delete(`http://localhost:8000/fooditems/${idToDelete}`)
        .then(res => {
            const filteredFoodItems = allFoodItems.filter(
                foodItem => foodItem._id !==idToDelete);
            setAllFoodItems(filteredFoodItems);
            navigate(`/menu`);
        })
}

    return(
        <>
        <div className="container-fluid">
            <h2>this page will show all menu items in a table</h2>
            <table>
                <tr>
                    <th>Item Title</th>
                    <th>Item Number</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Submitted On</th>
                    <th>Actions</th>
                </tr>
                {
                    allFoodItems.map(foodItem =>{
                        return(
                            <tr key={foodItem._id}>
                                <td><Link to={`/menu/${foodItem._id}`}>{foodItem.itemTitle}</Link></td>
                                <td>{foodItem.itemNum}</td>
                                <td>{foodItem.itemDesc}</td>
                                <td>{foodItem.itemPrice}</td>
                                <td>{foodItem.createdAt}</td>
                                <td>
                                    <Link to={`/menu/update/${foodItem._id}`}>Update ||</Link>
                                    <Link onClick={deleteFoodItemHandler}>Delete</Link>
                                </td>
                            </tr>
                        )
                    }) 
                }
            </table>
        </div>
        </>
        
    )
}
export default AllMenuItems;