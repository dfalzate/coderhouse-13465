import express from 'express'
import * as MessageController from '../controllers/messages.controller.js'

const router = express.Router()

router.post('/',MessageController.createMessage)
router.get('/',MessageController.getMessages)
router.put('/:id',MessageController.updateMessage)
router.delete('/:id',MessageController.deleteMessage)

export default router