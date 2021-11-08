const cluster = require('cluster')
const nCpus = require('os').cpus().length
const express = require('express')
const emoji = require ('node-emoji')
const cors = require ('cors')
const morgan = require ('morgan')
const dotenv = require ('dotenv')

const PORT = process.argv[2] || 3000
const modoCluster = process.argv[3] === 'CLUSTER'

if (modoCluster && cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`)
  for (let i = 0; i < nCpus; i++) {
    cluster.fork()    
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`)
    cluster.fork()    
  })
} else {

  dotenv.config()
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended:true}))
  app.use(morgan('dev'))

  app.get('/', (req, res) => {
    const primes = []
    const max = Number(req.query.max) || 1000
    for (let i = 0; i < max; i++) {
      if (isPrime(i)) primes.push(i)
    }
    res.json(primes)
  })
  
  const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}-PID ${process.pid}`))
  server.on('error', (err) => console.log(err))
}

function isPrime(num) {
  if([2,3].includes(num)) return true
  else if ([2, 3].some(n => num % n == 0)) return false
  else {
    let i = 5, w = 2
    while ((i ** 2) <= num) {
      if( num % i == 0) return false
      i += w
      w = 6-w
    }
  }
  return true
}