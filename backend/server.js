const express = require('express')
const cors = require('cors')
const { connectToDb, getDb } = require('./db')

const dataRoute = require('./routes/dataFestival/festival')

const app = express()

app.use(cors())
app.use(express.json())

connectToDb((err) => {
    if(!err){
        app.listen(5000, () => {
            console.log("localhost:5000");
        })
    }
})

app.use("/data", dataRoute)