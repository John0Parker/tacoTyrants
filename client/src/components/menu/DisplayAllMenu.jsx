import { Link } from "react-router-dom";

const DisplayAllMenu =({allFoodItems, setAllFoodItems})=>{

    return(
        <>
        <div className="container-fluid">
            <h1 className="mx-3 my-2"><Link to='/' style={{textDecoration: 'none'}}>All Items</Link></h1>
            <h2>this page will show all menu items in a list with an image of each item to the left</h2>
            
            {/* allFoodItems.map()
            Will look something like this:
            <div>
                <span>
                    <img src="" alt="" />
                </span>
                <span>
                    <p>itemTitle</p>
                    <p>itemDesc</p>
                    <p>itemPrice</p>
                    <p>Link to showOne</p>
                </span>
            </div> */}

        </div>
        </>
    )
}
export default DisplayAllMenu;