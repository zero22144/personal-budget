const mongoose = require("mongoose")
const nameModel = require("./models/b_data")

let url = 'mongodb://localhost:27017/budgetdata'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Connected to the database")
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })