import { Link } from "react-router-dom";

const Header =(props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <h1 className="mx-3 my-2"><Link to='/TacoTyrant' style={{textDecoration: 'none'}}>Taco Tyrants</Link></h1>
            </div>
            <div className="row d-flex justify-content-around">
                <Link to='/orders' className="btn col-2 btn-outline-primary mb-2 mx-1" style={{textDecoration: 'none'}}>Orders</Link>
                <Link to='/menu' className="btn col-2 btn-outline-primary mb-2 mx-1" style={{textDecoration: 'none'}}>Menu</Link>
                <Link to='' className="btn col-2 btn-outline-primary mb-2 mx-1" style={{textDecoration: 'none'}}>Locations</Link>
                <Link to='/AllReviews' className="btn col-2 btn-outline-primary mb-2 mx-1" style={{textDecoration: 'none'}}>Reviews</Link>
                <Link to='/AboutUs' className="btn col-2 btn-outline-primary mb-2 mx-1" style={{textDecoration: 'none'}}>About Us</Link>
            </div>
            <hr />
        </div>
    )//end return
}//end header
export default Header;
