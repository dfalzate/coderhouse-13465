const { exec } = require('child_process')
for (let i = 0; i < 3; i++) {
  const workProcess = exec('node support.js ' + i, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }
    console.log('stdout\n', stdout)
    console.log('stderr\n', stderr)
    workProcess.on('exit', (code) => {
      console.log(`Proceso terminado con codigo ${code}`)
    })
  })
}


/* -------------------------------------------------------------------------- */
/*                                 async/Await                                */
/* -------------------------------------------------------------------------- */

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  const { stdout, stderr, error } = await exec('find . -type f | wc -l')
  if (stderr) {
    console.log(stderr)
  }
  console.log(`Numero de archivos ${stdout}`)
}

main()