import express, { json } from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
import { FaqRouter } from './src/router/FaqRouter.js'
import { SmmRouter } from './src/router/SmmRouter.js'
import {  CardsRouter } from './src/router/CardRouter.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/image' , express.static('./public'))

app.use('/cards' , CardsRouter)
app.use('/faq' , FaqRouter)
app.use('/smm' , SmmRouter)




mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))
    .catch(() => console.log('Not Connected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})