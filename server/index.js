const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");

const salt = bcrypt.genSaltSync(10);

const app = express();

app.use(cors());
//enabling json parsing middleware
app.use(express.json());

// MongoDB's connection string (with the user password) is read on the .env file
// For security reasons, do NOT track .env on Git. Setup your connection string only on your local machine/secure environment
// Check example.env to see how to setup your .env on your local machine.
dotenv.config({ path: __dirname + '/.env' });
mongoose.connect(process.env.DB_URL);

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
            password: bcrypt.hashSync(password, salt),
            color
        });

        res.json(userDoc);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

});

app.get('/get', async (req, res) => {
    const users = await User.find()
    res.json(users);
});

app.put('/put', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userDoc = await User.findOne({ username });
        const check = bcrypt.compareSync(password, userDoc.password);

        if (check) {
            userDoc.email = email;
            await userDoc.save();
        };

        res.json(userDoc);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

app.delete('/delete', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userDoc = await User.findOne({ username });
        const check = bcrypt.compareSync(password, userDoc.password);

        if (check) {
            await User.deleteOne({ username });
            res.json('user deleted');
        } else {
            console.log('wrong password');
            res.status(400).json(userDoc);
        }

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

});

app.listen(4000);
