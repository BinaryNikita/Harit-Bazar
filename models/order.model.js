import mongoose from "mongoose";

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id: { type: String, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    billingDetails: {
        fullName: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        contactNumber: { type: String, required: true }
    },
    totalPrice: { type: Number, required: true },
    orderItems: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ],
    orderStatus: { 
        type: String, 
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], 
        default: 'Pending' 
    },
    paymentInfo: {
        method: { type: String, required: true },
        transactionId: { type: String },
        status: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' }
    },
    orderDate: { type: Date, default: Date.now },
    estimatedDeliveryDate: { type: Date }
});

export const Order = mongoose.model('Order', OrderSchema);
