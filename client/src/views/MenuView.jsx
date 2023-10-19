import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import AllMenuItems from '../components/menu/AllMenuItems';
import NewMenuItem from '../components/menu/NewMenuItem';
import UpdateMenuItem from '../components/menu/UpdateMenuItem';
import SingleMenuItem from '../components/menu/SingleMenuItem';
import DisplayAllMenu from '../components/menu/DisplayAllMenu';


// View for menu section (/tacotyrants/menu)
const MenuView = (props) => {
    const [allFoodItems, setAllFoodItems] = useState([])

// axios call to get all food items in order to pass down through props
    useEffect(() =>{
        axios.get('http://localhost:8000/api/fooditems')
            .then(res => setAllFoodItems(res.data))
            .catch(err => console.log(err));
    })

    return(
        <>
            {/* {<Header/>} */}
            <Routes>
                <Route path='/menu/' element={<DisplayAllMenu allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems}/>} />
                <Route path='/menu/showalldisplay' element={<AllMenuItems allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems}/>} />
                <Route path='/menu/create' element={<NewMenuItem allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems}/>} />
                <Route path='/menu/update/:id' element={<UpdateMenuItem allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems}/>} />
                <Route path='/menu/:id' element={<SingleMenuItem allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems}/>} />
            </Routes>
        </>
    )

}

export default MenuView;