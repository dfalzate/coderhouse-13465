import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  sender: String,
  message:String
}, {
  timestamps:true
})

export const MessageModel = mongoose.model('Messages',Schema)