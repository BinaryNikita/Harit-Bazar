import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    cart_id: { type: String, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true }
});

export const Cart = mongoose.model('Cart', CartSchema);