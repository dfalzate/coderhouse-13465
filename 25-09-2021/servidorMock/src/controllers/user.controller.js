
import UserService from '../services/user.service.js'

export default class UserController{
  constructor() {
    this.userService = new UserService()

    this.createUsers = this.createUsers.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.addUser = this.addUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  async  createUsers(req, res, next) {
    const cant = req.query.cant
    try {
      await this.userService.createUsers(cant)
      res.status(200).json('Usuarios creados!')
    } catch (error) {
      next(error)
    }
  }

  async getUsers(req, res, next) {
    let id = null
    if (req?.query?.id) id = req.query.id
    try {
      const {usuario, usuarios} = await this.userService.getUsers(id)
      res.status(200).json({usuario,usuarios})
    } catch (error) {
      next(error)
    }
    
  }
  
  async addUser(req, res, next) {
    try {
      await this.userService.addUser()
      res.status(200).send('Usuario agregado')
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req, res, next) {
    const id = req.params.id
    const { body } = req
    try {
      await this.userService.updateUser(id, body)
      res.status(200).send('Usuario editado')
    } catch (error) {
      next(error)
    }
  }
  
  async deleteUser(req, res, next) {
    const id = req.params.id
    try {
      this.userService.deleteUser(id)
      res.status(200).send('Usuario borrado')
    } catch (error) {
      next(error)
    }
  }
}