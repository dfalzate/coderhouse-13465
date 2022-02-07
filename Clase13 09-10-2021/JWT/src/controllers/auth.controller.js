import jwt from 'jsonwebtoken'
import * as UserService from '../services/user.service.js'

export async function login(req, res) {
  const { body } = req
  try {
    const user = await UserService.getUser(body.user)
    if (!user) {
      res.status(400).send('Usuario no encontrado')
    }
    const password = jwt.verify(user.password, process.env.PRIVATE_KEY).password
    if (body.password === password) {
      const token = jwt.sign({ user }, process.env.PRIVATE_KEY, { expiresIn: '1m' })
      res.status(200).json({token})
    }
  } catch (error) {
    res.status(401).send(error.message)
  }
}