import mongoose from 'mongoose';

// Define the User schema
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,  // Ensures the username is unique in the database
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures the email is unique in the database
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        default: 'admin',
    },
    status: {
        type: String,
        default: 'moderate-user',
    },
},
    { timestamps: true }
);

// Check if the User model already exists (using `models`), otherwise create a new model
const User = mongoose.models?.User || mongoose.model('User', UserSchema);

export default User;
