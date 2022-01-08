const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
// const initializePassport = require('./passport.config');
// const passport = require('passport');
// initializePassport {
//     passport,
//     async(email) => {
//         const userFound = await User.findOne({ email })
//         return userFound
//     },
//     async (id) => {
//         const userFound = await User.findOne({ _id: id });
//         return userFound;
//     }
// }

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))