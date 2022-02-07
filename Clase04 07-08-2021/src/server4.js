const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.use('/public', express.static('./src/files'))

app.get('/', (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(__dirname + '/files/index.html')
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
	console.log(req.file, req.body)
})

app.listen(8084, () => {
	console.log('Server port 8084')
})
