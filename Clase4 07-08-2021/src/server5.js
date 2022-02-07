const express = require('express')
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

const app = express()

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname)
	},
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(__dirname + '/files/files.html')
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
	console.log(req.file, req.body)
	res.status(200).send('ok')
})

app.listen(8085, () => {
	console.log('Server port 8085')
})
