const log4js = require('log4js')

log4js.configure({
  appenders: {
    myLoggerConsole: { type: "console" },
    myLoggerFile1:{type:'file', filename:'file1.log'},
    myLoggerFile2:{type:'file', filename:'file2.log'}
  },
  categories: {
    default:{appenders: ["myLoggerConsole"], level:"trace"},
    consola:{appenders: ["myLoggerConsole"], level:"debug"},
    archivo1:{appenders: ["myLoggerFile1"], level:"warn"},
    archivo2:{appenders: ["myLoggerFile2"], level:"info"},
    todos:{appenders: ["myLoggerConsole", "myLoggerFile1"], level:"error"}
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

console.log('Consola')
const loggerConsola = log4js.getLogger('consola')
loggerConsola.trace('Tracer')
loggerConsola.debug('Debug')
loggerConsola.info('Info')
loggerConsola.warn('warn')
loggerConsola.error('Error')
loggerConsola.fatal('Fatal')

console.log('Archivo1')
const loggerArchivo1 = log4js.getLogger('archivo1')
loggerArchivo1.trace('Tracer')
loggerArchivo1.debug('Debug')
loggerArchivo1.info('Info')
loggerArchivo1.warn('warn')
loggerArchivo1.error('Error')
loggerArchivo1.fatal('Fatal')

console.log('Archivo2')
const loggerArchivo2 = log4js.getLogger('archivo2')
loggerArchivo2.trace('Tracer')
loggerArchivo2.debug('Debug')
loggerArchivo2.info('Info')
loggerArchivo2.warn('warn')
loggerArchivo2.error('Error')
loggerArchivo2.fatal('Fatal')

console.log('Todos')
const loggerTodos = log4js.getLogger('todos')
loggerTodos.trace('Tracer')
loggerTodos.debug('Debug')
loggerTodos.info('Info')
loggerTodos.warn('warn')
loggerTodos.error('Error')
loggerTodos.fatal('Fatal')
