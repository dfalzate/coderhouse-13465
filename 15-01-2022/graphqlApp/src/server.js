import express from 'express'
import emoji from 'node-emoji'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql'
import { uuid } from 'uuidv4'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const schema = buildSchema(`
  type Persona {
    id: ID!
    nombre: String
    edad: Int
  }
  input PersonaInput {
    nombre: String
    edad: Int
  }
  type Query {
    getPersona(id: ID!): Persona
    getPersonas:[Persona]
  }
  type Mutation {
    addPersona(data: PersonaInput!): Persona
    deletePersona(id: ID!): Persona
    updatePersona(id: ID!, data: PersonaInput!): Persona
  }
`)

const personas =[]

function addPersona({ data }) {
  const id = uuid()
  const persona = data
  persona.id=id
  personas.push(persona)
  return persona
}
 
function getPersona({ id }) {
  
}

function getPersonas() {
  return personas
}

function deletePersona() {
}

function updatePersona() {
  
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {
    addPersona,
    getPersonas,
    deletePersona,
    updatePersona,
    getPersona
  },
  graphiql:true
}))

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))