import jwt from 'jsonwebtoken'
import * as UserService from '../services/user.service.js'

export async function createUser(req, res) {
  const { body } = req
  const password = jwt.sign({ password: body.password }, process.env.PRIVATE_KEY)
  body.password = password
  try {
    const response = await UserService.createUser(body)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).send(error.message)
  }
}