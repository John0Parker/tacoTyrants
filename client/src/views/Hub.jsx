import {Routes, Route, Link} from "react-router-dom";
import Header from "../components/Header"
import Orders from "../components/Orders"
import ContactUs from "../components/general/ContactUs";

const Hub = (props) => {
    return(
        <>
        {/* commented out header below because it was causing an additional  */}
        {/* {<Header/>} */}
        <Routes>
            {/* commented out root route. See Views/Home for general routing (home) */}
            {/* <Route path="/" element={<ContactUs/>}/> */}
            <Route path="/orders" element= {<Orders/>}/>
{/*             <Route path="/*" element="This page is inaccessible by normal means"/> */}
        </Routes>
        </>
    );
}

export default Hub;
