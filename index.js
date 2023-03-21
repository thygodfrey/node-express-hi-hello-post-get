//GET /hello

 express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    const name = req.query.name || 'world';
    res.send(`Hello, ${name}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
