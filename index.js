const express = require('express');
const app = express();
const port = 3000;

// Middleware to inspect x-blokc-key header
const checkHeader = (req, res, next) => {
    const header = req.header('x-blokc-key');
    if (!header) {
        return res.status(401).send('Unauthorized');
    }
    next();
}

// Image response handler
app.get('/image', (req, res) => {
    res.sendFile(__dirname + '/image.jpg');
});

// GET /hello endpoint
app.get('/hello', (req, res) => {
    const name = req.query.name || 'world';
    res.status(200).send(`Hello, ${name}!`);
});

// POST /hi endpoint
app.post('/hi', checkHeader, express.json(), (req, res) => {
    const name = req.body.name || 'world';
    res.status(200).send(`Hi, ${name}!`);
});

// Default exception handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
