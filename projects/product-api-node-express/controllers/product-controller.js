var dbConnection = require("../config/db-connection");

var connection = dbConnection.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

router.get("/",(req, res)=>{
    connection.query("select * from product",(err, records, fields)=>{
        if(err){
            console.error("Error while fetching products from database.. " + err);
        } else {
            res.send(records);
        }
    })
})

router.get("/:id",(req, res)=>{
    connection.query("select * from product where id=" + req.params.id,(err, records, fields)=>{
        if(err){
            console.error("Error occurred while fetching products from database.. " + err);
        } else {
            res.send(records);
        }
    })
})

router.post("/",(req, res)=>{
    console.log(req.body);
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;

    connection.query(
        "insert into product values("+ id +",'" + name + "','" + description + "',"+ price + ")",
        (err, result)=>{
            if(err){
                console.error("Error occurred while inserting product into database.. " + err);
            } else {
                res.send({status: "Success"});
            }
    })
})

router.delete("/:id",(req, res)=>{
    connection.query("delete from product where id=" + req.params.id,(err, result)=>{
        if(err){
            console.error("Error occurred while deleting product from database.. " + err);
        } else {
            res.send({status: "Success"});
        }
    })
})


module.exports = router;