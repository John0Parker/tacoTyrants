import { Link } from "react-router-dom";
import Header from '../Header'
const DisplayAllMenu =(props)=>{

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <h1 className="mx-3 my-2"><Link to='/' style={{textDecoration: 'none'}}>All Items</Link></h1>
            <h2>this page will show all menu items in a list with an image of each item to the left</h2>
        </div>
        </>
    )
}
export default DisplayAllMenu;