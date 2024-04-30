const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const fs = require('fs');

const app = express();

app.use(cors());
//enabling json parsing middleware
app.use(express.json());

mongoose.connect('')

/* app.get('/ping', (req, res) => {
    res.json('ping!')
}); */

app.post('/post', async (req, res) => {
    const { username, email, number, password, color } = req.body;

    try {
        const userDoc = await User.create({
            username,
            email,
            number,
            password,
            color
        });

        res.json(userDoc);
    } catch (err) {
        res.status(400).json(err);
    }

});

app.listen(4000);
