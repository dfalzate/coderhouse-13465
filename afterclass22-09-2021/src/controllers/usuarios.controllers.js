import * as UsuariosService  from '../services/usuarios.services.js'

export async function createUser(req, res) {
  try {
    const { body } = req
    const response = await UsuariosService.createUser(body)
    res.status(200).json(response )
  } catch (error) {
    res.status(400).send(error.message)
  }
}