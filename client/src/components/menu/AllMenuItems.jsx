import { Link } from "react-router-dom";
import Header from '../Header'
const AllMenuItems =(props)=>{

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <h1 className="mx-3 my-2"><Link to='/TacoTyrant' style={{textDecoration: 'none'}}>All Items</Link></h1>

        </div>
        </>
    )
}
export default AllMenuItems;