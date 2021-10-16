const emoji = require('node-emoji')

process.on('exit', (code) => {
  setTimeout(() => {
    console.log('No deberia salir')
  }, 5000);
  console.log('Codigo:', code)
})

process.on('uncaughtException', (err) => {
  console.log(err.message)
})

process.stdout.write(`${emoji.get('fire')} Cualquier cosa\n`)

noExiste()

process.exit(3)

console.log(
  process.cwd(),
  process.pid,
  process.version,
  process.title,
  process.platform,
  process.memoryUsage()
)
  