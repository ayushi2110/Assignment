require('dotenv').config()
const express = require('express');
const app = express();
const connectionDB = require('./Config/Connection');

connectionDB();

app.listen(process.env.PORT, () => console.log(`success ${process.env.PORT}`))
