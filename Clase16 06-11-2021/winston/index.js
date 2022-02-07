const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'verbose' }),
    new winston.transports.File({ filename: 'info.log', level: 'error' })
  ]
})

logger.log('silly','Level silly')
logger.log('debug','Level Debug')
logger.log('verbose','Level Verbose')
logger.log('info','Level Info')
logger.log('warn','Level Warn')
logger.log('error','Level Error')