const winston = require('winston');

const prodLogger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: 'debug.log', level:'debug'} ),
      new winston.transports.File({ filename: 'error.log', level:'error'} )
    ]
  })

const devLogger = winston.createLogger({
    transports: [
      new winston.transports.Console({level:'info'})
    ]
  })


let logger = null

console.log(process.argv[2])

if (process.argv[2] === 'PROD') {
  logger=prodLogger
} else {
  logger=devLogger
}

module.exports = logger