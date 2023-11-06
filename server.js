const express = require('express');
const app = express();
const connectDB = require('./db/db');
require('dotenv').config()
const User = require('./models/User');


app.use(express.json());

app.get('/', async (req, res) => {
    
    const users = await User.find({})
    res.status(200).json(users)
})

app.post('/', async (req, res) => {
    
    const {name, country} = req.body

    const user = await User.create({
        name, country
    })


    res.status(201).json(user)
})


const PORT = 5000
app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on port ${PORT}`)
})