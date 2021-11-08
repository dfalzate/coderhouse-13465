const logger = require('pino')()

logger.level = 'info'

logger.info('Pino info')
logger.error('Pino error')

logger.info('Mensaje %d', 42)
logger.info({ a: 42 }, 'Mensaje %d', 42)

const child = logger.child({ a: 'property' })
child.info('hola info')