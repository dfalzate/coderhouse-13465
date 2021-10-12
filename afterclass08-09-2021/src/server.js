import './db.js'
import express from 'express'
import routerUsuarios from './routers/users.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', routerUsuarios)

app.listen(3001, () => console.log('Server on port 3001'))
