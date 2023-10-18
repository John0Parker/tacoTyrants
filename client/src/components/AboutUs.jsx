import { Link } from "react-router-dom";
import Header from './Header'


const AboutUs =(props)=>{

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <h1 className="mx-3 my-2"><Link to='/TacoTyrant' style={{textDecoration: 'none'}}>About Us</Link></h1>
                <h2>test</h2>
        </div>
        </>
    )//end return
}//end header
export default AboutUs;