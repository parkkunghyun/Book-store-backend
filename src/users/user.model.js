import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    }
})

userSchema.pre('save', async( next) => {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

export const User = mongoose.model('User', userSchema);