const mongoose = require('mongoose');

// Need to add schema name
mongoose.connect("mongodb://127.0.0.1/<Schema_Name>", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Connected to MongoDB"))
    .catch( err => console.log("there was an error connecting to MongoDB: ", err));