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

//middleware

dotenv.config()

app.listen(process.env.PORT, () => {
    connectDB()
    console.log('Server running on port 3001!')
})
