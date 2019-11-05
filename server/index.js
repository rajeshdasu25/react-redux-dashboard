const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

// An api endpoint that returns a short list of items
app.get('/getAllCategories', (req, res) => {
    fs.readFile('./data/categories.json', (err, data) => {
        if (err) throw err;
        let categories = JSON.parse(data);
        res.json(categories);
    });
});

app.get('/getRecentCategories', (req, res) => {
    let size = req.query.size;
    fs.readFile('./data/categories.json', (err, data) => {
        if (err) throw err;
        let allItems = JSON.parse(data);
        var reverseItems = allItems.reverse();
        var topitems = reverseItems.slice(0,size);
        res.json(topitems);
    });
});

app.post('/addCategory', (req, res) => {
    fs.readFile('./data/categories.json', (err, data) => {
        if (err) throw err;
        let categories = JSON.parse(data);
        let formData = {
            'id': categories.length + 1,
            'type': req.body.type,
            'label': req.body.label
        };
        categories.push(formData);
        fs.writeFile('./data/categories.json', JSON.stringify(categories, null, 4), function (err) {
            if (err) throw err;
            res.send(formData);
        });
    });
});

app.get('/getAllProducts', (req, res) => {
    fs.readFile('./data/products.json', (err, data) => {
        if (err) throw err;
        let products = JSON.parse(data);
        res.json(products);
    });
});

app.get('/getRecentProducts', (req, res) => {
    let size = req.query.size;
    fs.readFile('./data/products.json', (err, data) => {
        if (err) throw err;
        let allItems = JSON.parse(data);
        var reverseItems = allItems.reverse();
        var topitems = reverseItems.slice(0,size);
        res.json(topitems);
    });
});

app.get('/getAllUsers', (req, res) => {
    fs.readFile('./data/users.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        res.json(users);
    });
});

app.get('/getRecentUsers', (req, res) => {
    let size = req.query.size;
    fs.readFile('./data/users.json', (err, data) => {
        if (err) throw err;
        let allItems = JSON.parse(data);
        var reverseItems = allItems.reverse();
        var topitems = reverseItems.slice(0,size);
        res.json(topitems);
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);