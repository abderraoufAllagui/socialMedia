const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect(
    "mongodb://raoufdb:123123123@127.0.0.1:27017/appdb", {
        keepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Connexion opened to mongodb!");
        }
    }
);



module.exports = app;