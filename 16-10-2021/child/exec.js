const { exec, execFile } = require('child_process')

exec('ls -lh', (err, stdout, stderr) => {
  if (err) {
    console.log(err)
  }
  if (stderr) {
    console.log('stderr:]\n',stderr)
  }
  console.log('stdout:\n', stdout)
})

execFile(__dirname+'/sh.sh',(err, stdout, stderr) => {
  if (err) {
    console.log(err)
  }
  if (stderr) {
    console.log('stderr:]\n',stderr)
  }
  console.log('stdout:\n', stdout)
})


for (let i = 0; i < 2e4; i++) {
  console.log(i);
}