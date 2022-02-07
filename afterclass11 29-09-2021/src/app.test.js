import app from './app.js'
import request from 'supertest'
import mongoose from 'mongoose'

describe('Test app', () => {
  beforeEach(async () => {
    await mongoose.connection.collections['messages'].drop()
  })


  it('Should create a new message', async () => {
    const message = {
      sender: "Sender 1",
      message:"Message 1"
    }
    const response = await request(app).post('/messages').send(message)
    expect(response.body.sender).toBe(message.sender)
    expect(response.body.message).toBe(message.message)
    expect(response.statusCode).toBe(201)
  })

  it('Should get all messages', async () => {
    const message = {
      sender: "Sender 2",
      message:"Message 2"
    }
    await mongoose.models.Messages.create(message)
    const response = await request(app).get('/messages')
    expect(response.statusCode).toBe(200)
    expect(response.body.messages).toHaveLength(1)
    expect(response.body.messages[0].sender).toBe(message.sender)
  })
  it('Should update a message', async ()=>{
    const message = {
      sender: "Sender 1",
      message:"Message 1"
    }
    const responseMessage = await mongoose.models.Messages.create(message)
    const newMessage = {
      sender: "Sender 3",
      message:"Message 3"
    }
    const response = await request(app).put(`/messages/${responseMessage._id}`).send(newMessage)
    expect(response.statusCode).toBe(200)
    expect(response.body.modifiedCount).toBe(1)
  })
  it('Should delete a message', async () => {
    const message = {
      sender: "Sender 1",
      message:"Message 1"
    }
    const responseMessage = await mongoose.models.Messages.create(message)
    const response = await request(app).delete(`/messages/${responseMessage._id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.deletedCount).toBe(1)
  })

})
