import {UserModel} from '../models/user.model.js'

export async function createUser(data) {
  try {
    const exist = await UserModel.findOne({ userName: data.userName })
    if (exist) {
      throw new Error('El usuario existe')
    }
    const response = await UserModel.create(data)
    return response
  } catch (error) {
    throw new Error(error)
  }
  
}

export async function getUser(_user) {
  try {
    const user = await UserModel.findOne({ _user })
    if (!user) {
      throw new Error('Usuario no encontrado')
    }
    return user
  } catch (error) {
    throw new Error(error)
  }
}