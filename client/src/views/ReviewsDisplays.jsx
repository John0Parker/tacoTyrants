import { Route,Routes } from "react-router-dom";
import AllReviews from "../components/Reviews/AllReviews";
import CreateReview from "../components/Reviews/CreateReview";
import OneReview from "../components/Reviews/OneReview";
import UpdateReviewFrom from "../components/Reviews/UpdateReviewForm";


const ReviewsDisplays=(props)=>{

    return(
        <>
            <Routes>
                <Route path='/allReviews' element={[<AllReviews/>]}/>
                <Route path='/review/create' element={[<CreateReview/>]}/>
                <Route path='/review/:id' element={[<OneReview/>]}/>
                <Route path='/review/update/:id' element={[<UpdateReviewFrom/>]}/>
            </Routes>
        
        </>
    )
}
export default ReviewsDisplays
