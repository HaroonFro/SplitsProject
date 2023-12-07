const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')



//database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database is Connected!')
    }
    catch(err){
        console.log('Error!')
    }
} 

//middleware
dotenv.config()
app.use(express.json())
app.use('/api/auth', authRoute)

app.listen(process.env.PORT, () => {
    connectDB()
    console.log('Server running on port 3001!')
})
