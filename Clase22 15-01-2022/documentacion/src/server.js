import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const swaggerConf = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentación swagger",
      description:"Esta es la descripción de la API"
    }
  },
  apis:['./docs/**/*.yaml']
}

const specs = swaggerJSDoc(swaggerConf)

app.use('/documentacion',swaggerUI.serve, swaggerUI.setup(specs))

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))