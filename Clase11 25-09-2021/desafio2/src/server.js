import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import faker from 'faker'
faker.locale = 'es'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

app.get('/test', (req, res) => {
  let cant = 10
  if(req?.query?.cant) cant = req.query.cant
  const users = []
  for (let i = 0; i < cant; i++) {
    const user = {}
    user.id=i+1
    user.nombre=faker.name.firstName()
    user.apellidos=faker.name.lastName()
    user.color = faker.commerce.color()
    users.push(user)
  }
  res.status(200).json({users})
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost/${PORT}`))
server.on('error', (err) => console.log(err))