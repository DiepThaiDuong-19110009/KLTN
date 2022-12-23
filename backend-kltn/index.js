require('dotenv').config()

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const PORT = 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server start at: ${PORT}`)
})