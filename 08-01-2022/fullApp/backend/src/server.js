const app =require('./app.js')
const emoji =require( 'node-emoji')

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))