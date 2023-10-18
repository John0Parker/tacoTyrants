import React,{useState} from "react";

import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
const CreateReview =(props)=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [title,setTitle]=useState("");
    const [review,setReview]=useState("");
    const [rating,setRating]=useState(0);
    const [dateOfOccurrence,setDateOfOccurrence]=useState()
    const navigate=useNavigate();
    const [errors,setErrors]=useState([])


    const formHandler=(e)=>{
        e.preventDefault();
        console.log(firstName,lastName,title,review,rating,dateOfOccurrence);
        axios.post('http://localhost:8000/api/review',{firstName,lastName,title,review,rating,dateOfOccurrence})
        .then(res=>{
            console.log(res.data)
            navigate(`/allReviews`)
        })//end then
        .catch(err=>{
            console.log(err.response.data)
            const errArray=[]
            for (const key of Object.keys(err.response.data.errors)){
                errArray.push(err.response.data.errors[key].message)
            }
            setErrors(errArray);
        })//end catch
    }//end form handler

    return(
        <div>
            <form onSubmit={formHandler} className=" container card w-50 px-0">
                <h3 className="card-header">Post a Review</h3>
                <div className="card-body">
                    <div style={{color:"red"}}>
                        {
                            errors.map((err,idx)=>{
                                return(
                                    <p key={idx}>{err}</p>
                                )//end map return
                            })//end map
                        }
                    </div>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" onChange={e=>setFirstName(e.target.value)} placeholder="enter first name" className="form-control"/>
                    </div>
                    <div className="from-group mt-2">
                        <label>Last Name: </label>
                        <input type="text" onChange={e=>setLastName(e.target.value)} placeholder="enter last name" className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Title:</label>
                        <input type="text" onChange={e=>setTitle(e.target.value)} placeholder="enter title"className="form-control" />
                    </div>
                    <div className="from-group mt-2">
                        <label>Review:</label>
                        <textarea  rows="5" value={review} onChange={e=>setReview(e.target.value)} className="form-control"/>
                    </div>
                    <div className="from-group mt-2">
                        <label>Rating </label>
                        <input type="number" onChange={e=>setRating(e.target.value)} placeholder="select a rating"className="form-control"/>
                    </div>
                    <div className="from-group mt-2">
                        <label>Date of Occurrence</label>
                        <input type="date" onChange={e=>setDateOfOccurrence(e.target.value)} className="form-control"/>
                    </div>
                    <div className="form-group mb-2 mt-2">
                        <input type="submit" value="Submit Review" className="btn  btn-outline-success w-25"/>
                        <Link to={"/AllReviews"} className="btn btn-outline-primary ml-2">See All Reviews</Link>
                    </div>
                </div>
            </form>
            {/* <Link to={"/AllReviews"} className="btn btn-outline-primary mt-2 ml-2">See All Reviews</Link> */}
        </div>
    )
}
export default CreateReview;