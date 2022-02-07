const cluster = require('cluster')
// const http = require('http')
const nCpus = require('os').cpus().length
const express = require('express')

if (cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`)
  for (let i = 0; i < nCpus; i++) {
    cluster.fork()    
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`)
    cluster.fork()    
  })
} else {
  // console.log(`Worker PID ${process.pid}`)
  // http.createServer((req, res) => {
  //   res.writeHead(200)
  //   res.end(`Hello world ${process.pid}`)
  // }).listen(8080)
  const express = require ('express')
  const emoji = require ('node-emoji')
  const cors = require ('cors')
  const morgan = require ('morgan')
  const dotenv = require ('dotenv')
  dotenv.config()
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended:true}))
  app.use(morgan('dev'))
  
  const PORT = process.env.PORT || 3000
  const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}-PID ${process.pid}`))
  server.on('error', (err) => console.log(err))
}