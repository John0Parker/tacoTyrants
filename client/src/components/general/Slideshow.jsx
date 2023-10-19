import React from "react";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '700px'
}
const slideImages = [
    {
        url: 'https://media.istockphoto.com/photos/traditional-mexican-food-picture-id1213818930?k=20&m=1213818930&s=612x612&w=0&h=L5eqA4-_CFA2lomgwWSgsDeXLm1zRU4tvJQxcYyPIDU=',
        caption: 'A plethora of various tex-mex cuisine such as corn, nachos, and burritos'
    },
    {
        url: 'https://www.hellskitchenlounge.com/wp-content/uploads/2021/02/load-image-2021-02-11T214924.855.jpeg',
        caption: 'Flautas covered in guacamole and cheese, surrounded by rice, refried beans, salsa, and guacamole'
    },
    {
        url: 'https://howtofeedaloon.com/wp-content/uploads/2014/01/enchiladas-feature-e1403185846601.jpg',
        caption: 'Cheesey Chicken Enchiladas'
    },
    ];
const Slideshow = (props) => {
    return (
    <div className="slide-container container">
        <h3> Familiar Favorites! </h3>
        <Slide>
        {slideImages.map((slideImage, index)=> (
            <div className="container" key={index}>
            <div  class="rounded mx-auto" style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

            </div>
            </div>
        ))} 
        </Slide>
    </div>
    )
}
export default Slideshow;