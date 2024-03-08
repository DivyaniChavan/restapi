const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/restapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log("Connection Error:", e); // Log the error
});

// Check MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
