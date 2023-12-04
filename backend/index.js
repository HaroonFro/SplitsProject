const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()


//database
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://haroon_fro:Supundam11@cluster0.eqy8gae.mongodb.net/Splits?retryWrites=true&w=majority")
        console.log('Database is Connected!')
    }
    catch(err){
        console.log('Error!')
    }
} 

app.listen(3001, () => {
    connectDB()
    console.log('Server running on port 3001!')
})
