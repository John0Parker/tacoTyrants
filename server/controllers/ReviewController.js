const Review = require("../models/Review");

module.exports.findAllReviews=(req,res)=>{
    Review.find()
    .then(allReviews=>{
        res.json(allReviews)
    })//end then
    .catch((err)=>{
        res.status.json({message: 'something went wrong with get all reviews xxxxxxxxxxxxxxxxx',error:err})
    });
}//end find all reviews 

module.exports.findOneReview=(req,res)=>{
    Review.findById(req.params.id)
        .then(oneReview=>res.json(oneReview))
        .catch((err)=>{
        res.json({message: "Something went wrong with get one review xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
        });//end catch
}//end get one review

module.exports.createReview=(req,res)=>{
    Review.create(req.body)
    .then(newReview=>res.json(newReview))
    .catch((err)=>{
        res.status(400).json(err)
    });
}//end create review

module.exports.deleteOneReview=(req,res)=>{
    Review.deleteOne({_id:req.params.id})
    .then(deleteConfirmation=>{res.json(deleteConfirmation)
    })//end then
    .catch((err)=>{
        res.json({message: "Something went wrong with delete one Review xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
    }); 
}

module.exports.updateReview=(req,res)=>{
    Review.findOneAndUpdate(
        {_id:req.params.id},
        req.body
        // ,{new:true, runValidators:true}
        )
        .then(updatedReview=>{
            res.json(updatedReview)
        })//end then
        .catch((err)=>{
            res.json({message: "Something went wrong with update Review xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
        }); //end catch
}//end update