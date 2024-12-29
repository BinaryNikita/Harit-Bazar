import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    category_id: { type: String, required: true, unique: true },
    categoryName: { type: String, required: true },
    subCategory: { type: String }
});

export const Category = mongoose.model('Category', CategorySchema);
