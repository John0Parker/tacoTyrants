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
    height: '500px'
}
const slideImages = [
    {
        url: 'https://cdn3.iconfinder.com/data/icons/online-states/150/Photos-512.png',
        caption: 'Image 1'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/6598/6598519.png',
        caption: 'Image 2'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/7486/7486744.png',
        caption: 'Image 3'
    },
    ];
const Slideshow = (props) => {
    return (
    <div className="slide-container container">
        <h3> Familiar Favorites! </h3>
        <Slide>
        {slideImages.map((slideImage, index)=> (
            <div className="container" key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

            </div>
            </div>
        ))} 
        </Slide>
    </div>
    )
}
export default Slideshow