const log4js = require('log4js')


log4js.configure({
  appenders: {
    console: { type: "console" },
    error: { type: "file", filename: "error.log" },
    loggerConsole: { type: 'logLevelFilter', appender: 'console', level: 'info' },
    loggerFile:{ type:'logLevelFilter', appender: 'error', level:'error'}
  },
  categories: {
    default: { appenders: ['loggerConsole'], level: 'all' },
    custom:{ appenders: ['loggerConsole', 'loggerFile'], level: 'all'}
  }
})

console.log('Default')
const loggerDefault = log4js.getLogger()
loggerDefault.trace('Tracer')
loggerDefault.debug('Debug')
loggerDefault.info('Info')
loggerDefault.warn('warn')
loggerDefault.error('Error')
loggerDefault.fatal('Fatal')

console.log('Custom')
const loggerCustom = log4js.getLogger('custom')
loggerCustom.trace('Tracer')
loggerCustom.debug('Debug')
loggerCustom.info('Info')
loggerCustom.warn('warn')
loggerCustom.error('Error')
loggerCustom.fatal('Fatal')