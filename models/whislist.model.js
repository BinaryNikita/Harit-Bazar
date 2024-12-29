import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
    wishlist_id: { type: String, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    wishlistName: { type: String, required: true },
    product_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export const Whislist = mongoose.model('Wishlist', WishlistSchema);
