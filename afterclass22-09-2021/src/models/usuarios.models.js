import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minlength: [5,'El nombre es muy corto'],
    // maxLength:[10,'El nombre es muy largo'],
    // match:/Diego/
    enum:['Diego', 'Fernando', 'Luisa', 'Ricardo']
  },
  age:{
    type: Number,
    required: true,
    min: 18,
    max:30
  },
  email: {
    type: String,
    required: true,
    // match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    validate: [{
      validator: (value) => {
        if (value.length < 10) return false
        return true
      },
      message:'El correo es muy corto'
    },
      {
        validator: (value) => {
          return true
        },
        message:'Cualquier mensaje'
      }
    ],
    index: true,
    unique:true
  }
}, {
  timestamps:true
}
)

export const UsuarioModel = mongoose.model('Usuarios',Schema)