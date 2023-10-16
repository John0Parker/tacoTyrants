const Location = require('../models/Location');

module.exports = {
    findAll: (req, res) => {
        Location.find()
            .then( allLocations => res.json(allLocations))
            .catch( err => res.status(400).json(err))
    },

    findOneLocation: (req, res) => {
        Location.findById(req.params.id)
            .then( oneLocation => res.json(oneLocation))
            .catch( err => res.status(400).json(err))
    },

    createLocation: (req, res) => {
        Location.create(req.body)
            .then( newLocation => res.json(newLocation))
            .catch( err => res.status(400).json(err))
    },

    updateLocation: (req, res) => {
        Location.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then( updatedLocation => res.json(updatedLocation))
            .catch( err => res.status(400).json(err))
    },

    deleteLocation: (req, res) => {
        Location.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch( err => res.status(400).json(err))
    }
}