// api/index.js
const express = require('express');
const app = express();

app.use(express.json());

// GET endpoint
app.get('/api/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// POST endpoint
app.post('/api/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowerCaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercase = lowerCaseAlphabets.sort().pop() || null;

    res.status(200).json({
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

module.exports = app;
