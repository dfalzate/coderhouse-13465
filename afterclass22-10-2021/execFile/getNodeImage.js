const { execFile } = require('child_process')
const fs = require('fs')

execFile(__dirname + '/processNodeImage.sh', (err, stdout, stderr) => {
  if (err) {
    console.log(err)
    return
  }
  if (stderr) {
    console.log(stderr)
    return
  }
  console.log('stdout\n', stdout)
  
  const web = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Display Image</title>
    </head>
    <body>
      <img style='display:block; width:200px;height:200px;' id='base64image'
         src='data:image/svg+xml;base64,${stdout}'/>
    </body>
  </html>
  `
  fs.writeFileSync('./index.html',web)
})