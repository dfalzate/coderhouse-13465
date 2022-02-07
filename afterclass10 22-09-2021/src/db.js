import mongoose from 'mongoose'
import dotenv from 'dotenv'
import emoji from 'node-emoji'
dotenv.config()

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology:true
  },
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(emoji.get('fire'),'Conectado a la base de datos')
    }
  }
)

export default mongoose