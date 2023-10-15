const FoodItem = require('../models/FoodItem')

module.exports = {
    findAllFoodItems: (req, res) => {
        FoodItem.find()
            .then(allFoodItems => res.json(allFoodItems))
            .catch(err => res.status(400).json(err));
    },
    findOneFoodItem:(req, res) => {
        FoodItem.findById(req.params.id)
            .then(oneFoodItem => res.json(oneFoodItem))
            .catch(err => res.status(400).json(err));
    },
    createFoodItem: (req, res) => {
        FoodItem.create(req.body)
            .then(foodItem => res.json(foodItem))
            .catch(err => res.status(400).json(err));
    },
    updateFoodItem: (req, res) => {
        FoodItem.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(updatedFoodItem => res.json(updatedFoodItem))
            .catch(err => res.status(400).json(err))
    },
    deleteFoodItem: (req, res) => {
        FoodItem.findByIdAndDelete(req.params.id)
            .then(deletedFoodItem => res.json(deletedFoodItem))
            .catch(err => res.status(400).json(err))
    }
}
