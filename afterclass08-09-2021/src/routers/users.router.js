import express from 'express'
import * as userController from '../controllers/users.controller.js'

const router = new express.Router()

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.delete('/:userId', userController.deleteUser)
router.patch('/:userId', userController.updateUser)

export default router
