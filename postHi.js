//POST /hi

const express = require('express');
const app = express();

app.use(express.json());

app.post('/hi', (req, res) => {
    const name = req.body.name || 'world';
    res.send(`Hi, ${name}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
