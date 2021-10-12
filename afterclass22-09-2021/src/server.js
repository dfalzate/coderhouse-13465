import './db.js'
import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import UsuariosRouter from './routers/usuarios.router.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

app.get('/', (req, res) => { })
app.use('/usuarios',UsuariosRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost/${PORT}`))