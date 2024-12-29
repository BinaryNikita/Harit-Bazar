import mongoose from ('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    isActive: { type: Boolean, default: true }
});

export const User = mongoose.model('User', UserSchema);
