const mongoose = require('mongoose');
require('dotenv').config();

// Load the MongoDB connection string from environment variables
const MongoDB_Connection_String = process.env.MONGODB_URI;

if (!MongoDB_Connection_String) {
    console.error('MongoDB URI is not defined. Please check your .env file.');
    process.exit(1); // Exit the app if the connection string is missing
}

// Connect to MongoDB
mongoose.connect(MongoDB_Connection_String, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Create the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
