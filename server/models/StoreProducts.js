import mongoose, { Schema } from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quality: {
            type: String,
            required: true,
        },
        store: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: true,
        }
    },
    { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);
export default Product;