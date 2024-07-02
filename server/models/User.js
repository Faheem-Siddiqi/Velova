import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        profileImage: {
            type: String,
        },
        contactNumber: {
            type: Number,
        },
        email: {
            type: String,
            required: [true, "Please enter an Email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter Password"],
        },
        address: {
            type: String,
        },
        location: {
            type: String,
            required: [true, "Please enter Location"],
        },
        state: {
            type: String,
        },
        zip: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
        },
        userType: {
            type: String,
            enum: ['admin', 'user', 'advanceTechnician', 'technician'],
            required: [true, "Please enter useType"],
        },
        // Technicians
        availability: {
            type: String,
            enum: ['male', 'female', 'other'],
        },
        // Electrical engineer
        businessName: {
            type: String,
        },
        businessDescription: {
            type: String,
        },
        comments: {
            type: String,
        },
    },
    { timestamps: true }
);
const User = mongoose.model('User', userSchema);
export default User;