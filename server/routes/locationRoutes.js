const locationController = require('../controllers/locationController');

module.exports = app => {
    app.get('/api/locations', locationController.findAll);
    app.post('/api/locations', locationController.createLocation);
    app.get('/api/locations/:id', locationController.findOneLocation);
    app.patch('/api/locations/:id', locationController.updateLocation);
    app.delete('/api/locations/:id', locationController.deleteLocation);
}