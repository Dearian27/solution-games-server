import mongoose, { Schema } from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },
    subscribers: {
      
    },
    role: {
      type: String, // pupil teacher admin
      required: true,
    }
  }
)

export const User = mongoose.model('User', userSchema);