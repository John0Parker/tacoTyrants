const Review= require("../controllers/ReviewController");

module.exports = app=>{
    app.get("/api/allReviews",Review.findAllReviews)
    app.post("/api/review",Review.createReview)
    app.get("/api/review/:id",Review.findOneReview)
    app.delete("/api/review/:id",Review.deleteOneReview)
    app.patch("/api/review/:id", Review.updateReview)
}