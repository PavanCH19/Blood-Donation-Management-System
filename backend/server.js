const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require("./connection.js");

const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json());

const insertData = (formData, res) => {
    const sql = `INSERT INTO donarregistration (donarName, donarNumber, donarEmail, donarAge, donarBloodGroup, donarGender, donarState, donarDistrict, donarTaluq, donarCity, donarAddress, donarPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        formData.name,
        formData.mobileNumber,
        formData.email,
        formData.age,
        formData.selectedBlood,
        formData.selectedGender,
        formData.selectedState,
        formData.selectedDistrict,
        formData.selectedTaluq,
        formData.selectedCity,
        formData.address,
        formData.password
    ];

    conn.query(sql, values, (error) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    });
};

// Endpoint to handle form data
app.post('/donarRegistration', (req, res) => {
    const formData = req.body;
    const query = "SELECT EXISTS(SELECT 1 FROM donarregistration WHERE donarPassword = ?) AS passwordExists";

    conn.query(query, [formData.password], (err, results) => {
        if (err) {
            console.error('Error checking password existence:', err);
            res.status(500).send('Error checking password existence');
        } else {
            const exists = results[0].passwordExists;
            if (exists) {
                res.status(409).json({ message: 'Password already exists' });
            } else {
                insertData(formData, res);
            }
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
