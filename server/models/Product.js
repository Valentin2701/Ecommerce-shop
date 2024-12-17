import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
});

const Product = mongoose.model("Product", productSchema);
export { Product };
