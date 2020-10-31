const express = require('express');
const cors  = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const budgetSchemaModel = require('./Models/budget_schema');

let url = 'mongodb://localhost:27017/budgetdata'
const port = 3000;

app.use('/', express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            budgetSchemaModel.find({})
                .then((data) => {
                    console.log(data)
                    res.json(data);
                 mongoose.connection.close();
                })
                 .catch((connectionError) => {
                    console.log(connectionError);
                 });
            })
                .catch((connectionError) => {
                    console.log(connectionError)
                 });
         });

app.post('/b_data', (req, res) => {
    console.log(req.body);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() =>{
            var newBudget = {
                title: req.body.title,
                budget: req.body.budget,
                color: req.body.color,
            };
            budgetSchemaModel.insertMany(newBudget)
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError)
                });
        })
            .catch((connectionError) => {
                console.log(connectionError)
            });
    }); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});