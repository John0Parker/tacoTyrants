import {Routes, Route, Link} from "react-router-dom";
import Orders from "../components/orderfolder/Orders";
import OrderCreate from "../components/orderfolder/OrderCreate";
import OrderEdit from "../components/orderfolder/OrderEdit";
import OrderDisplay from "../components/orderfolder/OrderDisplay";

const Hub = (props) => {
    return(
        <>
            <Routes>
                <Route path='/orders' element={[<Orders/>]}/>
                <Route path='/orders/create' element={[<OrderCreate/>]}/>
                <Route path='/orders/:id' element={[<OrderDisplay/>]}/>
                <Route path='/orders/edit/:id' element={[<OrderEdit/>]}/>
            </Routes>
        </>
    );
}

export default Hub;
