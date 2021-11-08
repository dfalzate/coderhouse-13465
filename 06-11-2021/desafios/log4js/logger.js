const log4js = require('log4js')

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: 'errors.log' },
    archivoDebug: { type: 'file', filename: 'debug.log' },
    loggerConsole: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
    loggerDebug:{type:'logLevelFilter', appender:'archivoErrores', level:'error'},
    loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
    loggerArchivoDebug:{type:'logLevelFilter', appender:'archivoDebug', level: 'debug'}
  },
  categories: {
    default: { appenders: ['loggerConsole'], level: 'all' },
    prod:{ appenders:['loggerArchivoErrores', 'loggerArchivoDebug'], level:'all'}
  }
})

let logger = null

console.log(process.argv[2])

if (process.argv[2] === 'PROD') {
  logger=log4js.getLogger('prod')
} else {
  logger=log4js.getLogger()
}

module.exports = logger