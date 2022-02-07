import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// const corsOptions = {
//   origin: 'http://localhost:4000',
//   optionsSuccessStatus: 200,
//   methods:"PUT"
// }

const allowList = ['http://example.com', 'http://something.com']

const corsOptionsDelegate = (req, callback) => {
  let corsOptions
  let isDomainAllowed = allowList.indexOf(req.header("Origin")) !== -1
  let isExtensionAllowed = req.path.endsWith('.jpg')
  console.log(isExtensionAllowed)
  
  if (isDomainAllowed && isExtensionAllowed) {
    corsOptions = {
      origin:true
    }
  } else {
    corsOptions = {
      origin : false
    }
  }
  callback(null,corsOptions)
}

app.use(cors(corsOptionsDelegate))
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send('Hola CORS')
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))