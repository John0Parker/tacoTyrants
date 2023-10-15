const foodItemController = require('../controllers/foodItemController')

module.exports = app =>{
    app.get('/api/fooditems', foodItemController.findAllFoodItems);
    app.get('/api/fooditems/:id', foodItemController.findOneFoodItem);
    app.post('/api/fooditems', foodItemController.createFoodItem);
    app.put('/api/fooditems/:id', foodItemController.updateFoodItem);
    app.delete('/api/fooditems/:id', foodItemController.deleteFoodItem);
}