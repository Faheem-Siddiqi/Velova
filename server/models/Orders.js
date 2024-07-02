import mongoose from "mongoose";
const orderRequestSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true,
        },
        status: {
            type: String,
            enum: ['active', 'finished'],
            default: 'active',
            required: true,
        },
        requestedAt: {
            type: Date,
            default: Date.now,
        },
        completedAt: {
            type: Date,
        },
        diagnosisNotes: {
            type: String,
        }
    },
    { timestamps: true }
);
const OrderRequest = mongoose.model('OrderRequest', orderRequestSchema);
export default OrderRequest;