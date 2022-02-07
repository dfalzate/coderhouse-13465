import { MessageModel } from '../models/messages.model.js'

export async function createMessage(req, res) {
  const { body } = req
  const response = await MessageModel.create(body)
  res.status(201).json(response)
}

export async function getMessages(req, res) {
  const messages = await MessageModel.find()
  res.status(200).json({messages})
}

export async function updateMessage(req, res) {
  const id= req.params.id
  const {body} = req
  const response = await MessageModel.updateOne({ _id: id }, body)
  res.status(200).json(response)
}

export async function deleteMessage(req, res) {
  const id= req.params.id
  const response = await MessageModel.deleteOne({ _id: id })
  res.status(200).json(response)
}