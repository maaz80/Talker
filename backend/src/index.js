import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import authRoutes from './routes/auth.route.js'
import e from 'express'
const app = express()

dotenv.config()
const PORT = process.env.PORT

app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log('Server is running in PORT : ' + PORT);
    connectDB()
})

