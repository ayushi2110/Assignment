require('dotenv').config()
const express = require('express');
const app = express();
const connectionDB = require('./Config/Connection');

connectionDB();

app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(process.env.PORT, () => console.log(`success ${process.env.PORT}`))