import express from 'express'
import UserController from '../controllers/user.controller.js'

export default class UserRoute extends express.Router{
  constructor() {
    super()
    this.userController = new UserController()

    this.post('/popular',this.userController.createUsers)
    this.get('/',this.userController.getUsers)
    this.post('/',this.userController.addUser)
    this.put('/:id',this.userController.updateUser)
    this.delete('/:id',this.userController.deleteUser)
  }
}