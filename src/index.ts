import express from 'express';
require('dotenv').config();
console.log(process.env.HELLO)
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});