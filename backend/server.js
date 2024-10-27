const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require("./connection.js");

const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form data
app.post('/donarRegistration', (req, res) => {
    //const formData = req.body;
    const sql = "select donarPassword from donarregistration where donarPassword = '9986396323'";

    conn.query(query, (err, res) => {
        if (err) {
            console.error('Error inserting data:', error);
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    });

    // // SQL query to insert data
    // const sql = `INSERT INTO donarregistration (donarName, donarNumber, donarEmail, donarAge, donarBloodGroup, donarGender, donarState, donarDistrict, donarTaluq, donarCity, donarAddress, donarPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    // const values = [
    //     formData.name,
    //     formData.mobileNumber,
    //     formData.email,
    //     formData.age,
    //     formData.selectedBlood,
    //     formData.selectedGender,
    //     formData.selectedState,
    //     formData.selectedDistrict,
    //     formData.selectedTaluq,
    //     formData.selectedCity,
    //     formData.address,
    //     formData.password
    // ];

    // conn.query(sql, values, (error, results) => {
    //     if (error) {
    //         console.error('Error inserting data:', error);
    //         res.status(500).send('Error inserting data');
    //     } else {
    //         res.status(200).json({ message: 'Data inserted successfully' });
    //     }
    // });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
