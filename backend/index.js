const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const dotenv = require('dotenv')



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

dotenv.config()

app.listen(3001, () => {
    connectDB()
    console.log('Server running on port 3001!')
})
