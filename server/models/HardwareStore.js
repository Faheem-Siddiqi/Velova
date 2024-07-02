import mongoose from "mongoose";
const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },
    { timestamps: true }
);
const Store = mongoose.model('Store', storeSchema);
export default Store;