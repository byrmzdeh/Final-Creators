import express from 'express'
import { createUsers, deleteUser, getAllUsers, getUser, updateUsers } from '../controller/UserController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'


export const userRouter = express.Router()

userRouter.get('/',authMiddleware(['user','admin']) ,  getAllUsers)
userRouter.get('/:id', authMiddleware(['user','admin']) ,  getUser)
userRouter.post('/', authMiddleware(['admin']) , createUsers)
userRouter.put('/:id', authMiddleware(['admin']) ,  updateUsers)
userRouter.delete('/:id', authMiddleware(['admin']) ,  deleteUser)