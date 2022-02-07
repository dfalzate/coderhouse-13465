import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  
  },
  { timestamps: true }
)

export const UserModel = mongoose.model('User',Schema)