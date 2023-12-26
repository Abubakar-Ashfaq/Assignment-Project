import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './Routes/router.js'
import 'dotenv/config'
import dotenv from 'dotenv'
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)
dotenv.config()
const dbport = process.env.DBPORT

mongoose.set('strictQuery', true);
mongoose.connect(dbport, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB...')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
