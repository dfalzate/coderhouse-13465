const { spawn } = require('child_process')

const find = spawn('find', ['.'])

find.stdout.on('data', (data) => {
  console.log(data)
})

find.stderr.on('data', (data) => {
  console.log(data)
})

find.on('error', (err) => {
  console.log(err)
  
})

find.on('close', (code) => {
  console.log('Exit code',code)
})