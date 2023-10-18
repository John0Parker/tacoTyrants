import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams,useNavigate,Link } from "react-router-dom";


const UpdateReviewFrom=(props)=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [title,setTitle]=useState("");
    const [review,setReview]=useState("");
    const [rating,setRating]=useState(0);
    const [dateOfOccurrence,setDateOfOccurrence]=useState()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/review/"+ id)
        .then(res=>{
            console.log(res.data)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setTitle(res.data.title)
            setReview(res.data.review)
            setRating(res.data.rating)
        })//end then
        .catch(err=>console.log(err))
    },[])//end useEffect

    const formHandler=(e)=>{
        e.preventDefault();
        console.log(firstName,lastName,title,review,rating,dateOfOccurrence);
        axios.patch(`http://localhost:8000/api/review/${id}`,{firstName,lastName,title,review,rating,dateOfOccurrence})
        .then(res=>{
            console.log(res.data)
            navigate(`/review/${id}`)
        })//end then
        .catch(err=>{
            console.log(err.response.data)
        })//end catch
    }//end form handler


    return(
        <div>
            <div>

                <form onSubmit={formHandler} className="  container card py-0 px-0 w-50">
                    <h3 className="card-header">Update Review</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>First Name: </label>
                            <input type="text" onChange={e=>setFirstName(e.target.value)} value={firstName} placeholder="enter first name" className="form-control"/>
                        </div>
                        <div className="from-group mt-2">
                            <label>Last Name: </label>
                            <input type="text" onChange={e=>setLastName(e.target.value)}  value={lastName} placeholder="enter last name" className="form-control"/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Title:</label>
                            <input type="text" onChange={e=>setTitle(e.target.value)}  value={title} placeholder="enter title"className="form-control" />
                        </div>
                        <div className="from-group mt-2">
                            <label>Review:</label>
                            <textarea  rows="5" value={review} onChange={e=>setReview(e.target.value)} className="form-control"/>
                        </div>
                        <div className="from-group mt-2">
                            <label>Rating </label>
                            <input type="number" onChange={e=>setRating(e.target.value)}value={rating}placeholder="select a rating"className="form-control"/>
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <input type="submit" value="Update Review" className="btn   btn-outline-success w-25"/>
                            <Link to={"/AllReviews"} className="btn btn-outline-primary ml-2">See All Reviews</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateReviewFrom;
