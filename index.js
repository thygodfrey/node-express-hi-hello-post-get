const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// middleware to parse JSON payloads
app.use(express.json());

// GET /hello endpoint
app.get('/hello', (req, res) => {
    const name = req.query.name || 'world';
    res.send(`Hello, ${name}!`);
});

// POST /hi endpoint
app.post('/hi', (req, res) => {
    const name = req.body.name || 'world';
    res.send(`Hi, ${name}!`);
});

// start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
