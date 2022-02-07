const pino = require('pino')

const prodLogger = pino('debug.log')
prodLogger.level='debug'

const devLogger = pino()
devLogger.level='info'

let logger = null

console.log(process.argv[2])

if (process.argv[2] === 'PROD') {
  logger=prodLogger
} else {
  logger=devLogger
}

module.exports = logger