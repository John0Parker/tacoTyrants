const OrderController = require('../controllers/orderController')

module.exports = app =>{
    app.get('/api/orders', OrderController.findAll);
    app.get('/api/orders/:id', OrderController.findOne);
    app.post('/api/orders', OrderController.create);
    app.put('/api/orders/:id', OrderController.update);
    app.delete('/api/orders/:id', OrderController.delete);
}
