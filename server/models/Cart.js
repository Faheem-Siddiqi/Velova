import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
    {
        technician: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                }
            }
        ],
        status: {
            type: String,
            enum: ['accepted', 'rejected', 'pending'],
            default: 'pending',
            required: [true, "Please Enter Status"],
        },
        qrCode: {
            type: String,
        }
    },
    { timestamps: true }
);
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;