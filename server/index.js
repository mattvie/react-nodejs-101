const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

app.use(cors());
//enabling json parsing middleware
app.use(express.json());

/* app.get('/ping', (req, res) => {
    res.json('ping!')
}); */

app.post('/post', (req, res) => {
    const { username, email, number, password, color } = req.body;
    res.json({ data: { username, email, number, password, color } })

});

app.listen(4000);
// mongoose
// mattwvie
// ygll3ZLpUKTwh6wq
// mongodb+srv://mattwvie:ygll3ZLpUKTwh6wq@cluster0.3tnpzso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0