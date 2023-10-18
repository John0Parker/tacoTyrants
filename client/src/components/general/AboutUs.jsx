
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs =()=>{
    return(
        <div className='container'>
            <h2 className='mt-5'>About Us</h2>
            <div>
                <div>
                    <div className='card my-3'>
                        <h5 className='card-header'>Our Mission: </h5>
                        <div className='card-body'>
                            <p>
                                mission statment here
                            </p>
                        </div>
                    </div>
                    <div className='row card'>
                        <h5 className='card-header'>A Word from out founder:xxxxxxx xxxxx</h5>
                        <div className=' card-body  d-flex justify-content-around '>
                            <div className='col-7'>
                                <p>Enter fonders words here</p>
                                <Link to='/orders' className='btn btn-success'>Order Now</Link>
                            </div>
                            <img  className="col-4" src="" alt="some stock photo" />
                        
                        </div>
                    </div>    
                </div>
                </div> {/* end card div for  */}
                    <div className='card  mt-3 mb-5'>
                        <h4 className='card-header'>Check Out and support our favorite charity's </h4>
                    <div className='card-body row'>
                        <img className='col-4' src="" alt="some img" />
                        <div className='row col-8 '>
                            <p>chritys here</p>
                        </div>
                    </div>
                </div> {/* end card div for charitys */}
        </div>
    )//end return
}//end aboutUs
export default AboutUs;
