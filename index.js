require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
app.get("/api/patient", (req, res) => {
    pool.query("SELECT * FROM patient", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});
app.get("/api/patient/:id", (req, res) => {
    pool.query(
        "SELECT id, patient_name FROM patient WHERE id = ?",
        [req.params.id],
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(rows);
        }
    );
});
app.get("/api/patient/:id/chemist", (req, res) => {
    pool.query(
        'SELECT m.medicine_catalog,p.Huduma_number,p.location,p.patient_name FROM medicine m  JOIN patient p ON p.id = m.patient_id WHERE m.patient_id = ?',
        [req.params.id],
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(rows);
        }
    );
});
app.listen(600, function () {
    console.log("App listening on port 600");
});