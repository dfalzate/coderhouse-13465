import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'
// import config from './config.js'

// console.log(config.NODE_ENV)

console.log(process.env.MODO)

dotenv.config({
  path: process.env.MODO==='DEV' ? path.resolve() +'/server1.env':path.resolve() +'/server2.env' 
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const server = app.listen(process.env.PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${process.env.PORT}`))
server.on('error', (err) => console.log(err))

/* --------------------------- ejercicio resuelto --------------------------- */
const modo = process.env.MODO ?? 'prod'
const puerto = Number(process.env.PUERTO ?? 0)
const debug = process.env.DEBUG == 'true' ? true : false

console.log({
    modo,
    puerto,
    debug
})