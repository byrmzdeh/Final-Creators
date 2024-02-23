import express, { json } from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'
import { FaqRouter } from './src/router/FaqRouter.js'
import { SmmRouter } from './src/router/SmmRouter.js'
import {  CardsRouter } from './src/router/CardRouter.js'
import 'dotenv/config'
import { AuthRouter } from './src/router/AuthRouter.js'
import { userRouter } from './src/router/UserRouter.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/image' , express.static('./public'))

app.use('/cards' , CardsRouter)
app.use('/faq' , FaqRouter)
app.use('/smm' , SmmRouter)
app.use('/user' , userRouter )
app.use('/' , AuthRouter)




mongoose
    .connect(process.env.DB_SECRET_KEY)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});