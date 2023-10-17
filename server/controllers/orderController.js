const Order = require('../models/Orders')

module.exports = {
    findAll: (req, res) => {
        Order.find()
            .then(allOrders => res.json(allOrders))
            .catch(err => res.status(400).json(err));
    },
    findOne:(req, res) => {
        Order.findById(req.params.id)
            .then(oneOrder => res.json(oneOrder))
            .catch(err => res.status(400).json(err));
    },
    create: (req, res) => {
        Order.create(req.body)
            .then(Order => res.json(Order))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Order.findByIdAndUpdate(req.params.id, req.body, {
            new:true, 
            runValidators: true
    })
            .then(updatedOrder => res.json(updatedOrder))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Order.findByIdAndDelete(req.params.id)
            .then(deletedOrder => res.json(deletedOrder))
            .catch(err => res.status(400).json(err))
    }
}
