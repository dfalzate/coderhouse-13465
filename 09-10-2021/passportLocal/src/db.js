import mongoose from 'mongoose'
import emoji from 'node-emoji'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology:true
  },
)

mongoose.connection.once('open', () => { console.log(emoji.get('fire'), 'Conectado a la base de datos') })
mongoose.connection.on('error', (err) => { console.log(err) })

export default mongoose.connection
