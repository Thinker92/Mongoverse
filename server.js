const express = require('express');
const mongoose = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Placeholder for routes
// app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`🌍 Connected on localhost:${PORT}`);
});
