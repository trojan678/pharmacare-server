require("dotenv").config();
const express = require ("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
app.get("/api/patient",(req, res) => {
    pool.query("SELECT * FROM patient",(error, rows) =>{
        if (error) {
            return res.status(500).json({error});
        }

        res.json(rows);
    });
});
app.listen(600, function (){
    console.log("App listening on port 600");
});