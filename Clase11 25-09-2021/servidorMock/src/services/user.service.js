import generateUser from '../utils/user.utils.js'

export default class UserService {
  constructor() {
    this.users=[]
    this.lastId = 0
    
    this.createUsers = this.createUsers.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  async createUsers(cant=50) {
    let cantidad = cant
    if (cant) cantidad = Number(cant)
    const users = []
    for (let i = 0; i < cantidad; i++) {
      const user = {
        id: i + 1,
        ...generateUser()
      }
      users.push(user)
    }
    this.lastId=Number(cant)
    this.users = users
  return users
  }

  async getUsers(id) {
    if (id) {
      return { usuario:this.users.filter((user) => user.id === Number(id)) }
    } else {
      return { usuarios: this.users }
    }
  }

  async addUser() {
    try {
      this.users.push(
        {
          id: this.lastId + 1,
          ...generateUser()
        }
      )
      this.lastId++
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateUser(id, data) {
    let index = null
    try {
      let usuario = this.users.filter((user, _index) => {
        if (user.id === Number(id)) {
          index = _index
          return user
        }
      })[0]
      Object.assign(usuario, data)
      this.users[index] = usuario
      return
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteUser(id) {
    let index = null
    try {
      this.users.filter((user, _index) => {
        if (user.id === Number(id)) {
          index = _index
        }
      })
      this.users.splice(index, 1)
      return
    } catch (error) {
      throw new Error(error)
    }
  }


}