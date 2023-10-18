import React,{useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";


const AllReviews=(props)=>{
    const navigate=useNavigate();
    const [allReviews,setAllReviews]=useState([])
    
//functions 
    useEffect(()=>{
        axios.get("http://localhost:8000/api/allReviews")
            .then((res)=>{
                console.log(res.data)
                setAllReviews(res.data)
            })
            .catch((err)=>console.log(err))
    },[])//end useEffect
    
    const deleteHandler =(reviewId)=>{
        axios.delete(`http://localhost:8000/api/review/${reviewId}`)
            .then(res=>{
                setAllReviews(allReviews.filter(review=>review._id!=reviewId))
                console.log("all reviews after delete: " +allReviews)
            })
            .catch(err=>console.log(err))
    }//end delete


    return(
        <div className="container">
            <div>
                <h4 className="mb-3">Checkout Our Reviews!</h4>
                
            </div>
            <hr/>
            <table className="table table-hover">
                <thead className="thead-light">
                <tr className="align-items-center">
                        <th className="text-center">Title</th>
                        <th className="text-center">Posted By</th>
                        <th className="text-center">Review</th>
                        <th className="text-center">Rating</th>
                        <th className="text-center">Date of Occurrence</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allReviews.map((review,index)=>{
                            return(
                                <tr key={index}>
                                    <td className="text-center"><Link to={`/review/${review._id}`}>{review.title}</Link></td>
                                    <td className="text-center">{review.firstName} {review.lastName}</td>
                                    <td className="text-center">{review.review}</td> 
                                    <td className="text-center">{review.rating}</td>
                                    {
                                        review.dateOfOccurrence?<td className="text-center">{review.dateOfOccurrence}</td>:<td className="text-center">{review.createdAt}</td>
                                    }
                                <td className="d-flex justify-content-around">
                                    <button className="btn btn-outline-danger " onClick={e=>deleteHandler(review._id)}>Delete</button>
                                    <Link className="btn btn-outline-warning ml-2" to={`/review/update/${review._id}`}>Update</Link>
                                </td>
                                </tr>
                            )
                        })//end map
                    }
                </tbody>
            </table>
            <Link to={"/review/create"} className="btn btn-outline-success">Post a Review!</Link>
        </div>
    )//end return
}//end all reports
export default AllReviews;