import { useNavigate,useParams,Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

const OneReview =(props)=>{
    const navigate=useNavigate();
    const [review,setReview]=useState({})
    const {id}=useParams()

//functions
    useEffect(()=>{
        axios.get("http://localhost:8000/api/review/"+ id)
            .then(res=>{
                console.log(res),
                setReview(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    return(
        <div className="container">
            <div className="card">
                <div className="card-header d-flex align-content-center">
                    <h3>{review.title}</h3>
                </div>
                <div className="card-body">
                    <h5>{review.rating} Star(s)</h5>
                    <p>Review: {review.review} </p>
                    <div className="row">
                    <p className="mr-2">Posted by: {review.firstName} {review.lastName}</p>
                    {
                            review.dateOfOccurrence?<p>Date of occurrence: {review.dateOfOccurrence}</p>:<p> Posted: {review.createdAt}</p>
                    }
                    </div>
                </div>
            </div>
            <Link to={"/AllReviews"} className="btn btn-outline-primary mt-2">All Reviews</Link>
            <Link to={`/review/update/${id}`} className="btn btn-outline-warning mt-2 ml-2">Update</Link>
        </div>
    )
}
export default OneReview;