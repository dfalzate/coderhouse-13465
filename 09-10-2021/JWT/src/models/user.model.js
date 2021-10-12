import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  user: String,
  password: String
}, {
  timestamps:true
}
)
export const UserModel = mongoose.model('User',Schema)