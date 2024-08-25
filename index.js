const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
