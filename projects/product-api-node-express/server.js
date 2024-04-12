var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var productApi = require("./controllers/product-controller")

app.use("/api/products", productApi);

app.listen("8090");

console.log("Server up and running on port 8090..");