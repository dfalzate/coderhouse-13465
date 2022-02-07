const  express =require( 'express')
const  cors =require( 'cors')
const  morgan =require( 'morgan')
const dotenv = require('dotenv')
const RouterNoticias = require('./router/noticias.route.js')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const routerNoticias = new RouterNoticias()

app.use('/noticias', routerNoticias.start())

module.exports = app