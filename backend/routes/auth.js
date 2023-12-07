const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//register
router.post('/register', async(req,res) => {
    console.log(req)
    try {
            const {username, email, password} = req.body
            const newUser = new User({username, email, password})
            const savedUser = await newUser.save()
            console.log(newUser)
            res.status(200).json(savedUser)
    }
     catch(err){
       res.status(500).json(err) 
    }
})


//login



//logout


module.exports = router