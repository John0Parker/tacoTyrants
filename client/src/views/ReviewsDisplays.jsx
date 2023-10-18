import { Route,Routes } from "react-router-dom";
import Header from "../components/Header";
import AllReviews from "../components/Reviews/AllReviews";
import CreateReview from "../components/Reviews/CreateReview";
import OneReview from "../components/Reviews/OneReview";
import UpdateReviewFrom from "../components/Reviews/UpdateReviewForm";


const ReviewsDisplays=(props)=>{

    return(
        <>
            <Routes>
                <Route path='/allReviews' element={[<Header/>,<AllReviews/>]}/>
                <Route path='/review/create' element={[<Header/>,<CreateReview/>]}/>
                <Route path='/review/:id' element={[<Header/>,<OneReview/>]}/>
                <Route path='/review/update/:id' element={[<Header/>,<UpdateReviewFrom/>]}/>
            </Routes>
        
        </>
    )
}
export default ReviewsDisplays
