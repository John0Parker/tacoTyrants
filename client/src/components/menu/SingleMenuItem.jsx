import { Link } from "react-router-dom";
import Header from '../Header'

const SingleMenuItem =(props)=>{

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <h2>this page will show details for one menu item</h2>
        </div>
        </>
    )
}
export default SingleMenuItem;