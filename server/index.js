const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/getCategories', (req, res) => {
    fs.readFile('./data/categories.json', (err, data) => {
        if (err) throw err;
        let categories = JSON.parse(data);
        res.json(categories);
    });
});

app.get('/getProducts', (req, res) => {
    var products = [
        {
            "id": 1,
            "title": "Winter body",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 110,
            "img": "Item1"
        },
        {
            "id": 2,
            "title": "Adidas",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 80,
            "img": "Item2"
        },
        {
            "id": 3,
            "title": "Vans",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 120,
            "img": "Item3"
        },
        {
            "id": 4,
            "title": "White",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 260,
            "img": "Item4"
        },
        {
            "id": 5,
            "title": "Cropped-sho",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 160,
            "img": "Item5"
        },
        {
            "id": 6,
            "title": "Blues",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            "price": 90,
            "img": "Item6"
        }
    ];
    res.json(products);
});

app.get('/getUsers', (req, res) => {
    var users = [
        {
            "id": "1",
            "username": "user1",
            "password": "password",
            "first_name": "user1",
            "last_name": "lname",
            "email": "user1@mail.com"
        },
        {
            "id": "2",
            "username": "user2",
            "password": "password",
            "first_name": "user2",
            "last_name": "lname",
            "email": "user2@mail.com"
        },
        {
            "id": "3",
            "username": "user3",
            "password": "password",
            "first_name": "user3",
            "last_name": "lname",
            "email": "user3@mail.com"
        },
        {
            "id": "4",
            "username": "user4",
            "password": "password",
            "first_name": "user4",
            "last_name": "lname",
            "email": "user4@mail.com"
        },
        {
            "id": "5",
            "username": "user5",
            "password": "password",
            "first_name": "user5",
            "last_name": "lname",
            "email": "user5@mail.com"
        }
    ];
    res.json(users);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);