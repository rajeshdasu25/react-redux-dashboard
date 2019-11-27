const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const ip = require('ip').address();
const packageJson = require('../package.json');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

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
        } catch (err) {
            return cb && cb(err)
        }
    })
}

app.get('/ping', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var responseData = {
        "Server Status": "Up and Running",
        "Port": port,
        "Instance IP address": ip,
        "Environment": "Dev",
        "Application Version": packageJson.version,
        "Node Version": process.version
    };
    res.status(200).send(JSON.stringify(responseData, null, 4));
});

// An api endpoint that returns a short list of items
app.get('/getAllItems', (req, res) => {
    let itemType = req.query.type;
    let jsonUrl = './data/'+itemType+'.json';

    fs.readFile(jsonUrl, (err, data) => {
        if (err) throw err;
        let items = JSON.parse(data);
        res.json(items);
    });
});

app.get('/getAnItem', (req, res) => {
    let itemType = req.query.type;
    let itemId = req.query.id;
    let jsonUrl = './data/'+itemType+'.json';

    fs.readFile(jsonUrl, (err, data) => {
        if (err) throw err;
        let items = JSON.parse(data);
        let resultItem = items.find(item => item.id == itemId );
        res.json(resultItem);
    });
});

app.get('/getRecentItems', (req, res) => {
    let type = req.query.type;
    let size = req.query.size;
    let jsonUrl = './data/'+type+'.json';

    fs.readFile(jsonUrl, (err, data) => {
        if (err) throw err;
        let allItems = JSON.parse(data);
        var reverseItems = allItems.reverse();
        var topitems = reverseItems.slice(0, size);
        res.json(topitems);
    });
});

app.post('/addNewItem', (req, res) => {
    let itemType = req.query.type;
    let jsonUrl = './data/'+itemType+'.json';
    let formData = {};

    fs.readFile(jsonUrl, (err, data) => {
        if (err) throw err;
        let items = JSON.parse(data);        
        switch(itemType) {
            case 'categories':
                formData = {
                    'id': items.length + 1,
                    'type': req.body.type,
                    'label': req.body.label
                };
                break;
            case 'users':
                formData = {
                    'id': items.length + 1,
                    'username': req.body.username,
                    'password': req.body.password,
                    'first_name': req.body.first_name,
                    'last_name': req.body.last_name,
                    'email': req.body.email
                };
                break;
                case 'queries':
                    formData = {
                        'id': items.length + 1,
                        'fullName': req.body.fullName,
                        'email': req.body.email,
                        'comments': req.body.comments,
                        'raisedTime': Date.now(),
                        'closedTime': Date.now(),
                        'status': 1
                    };
                    break;
        }
        items.push(formData);
        fs.writeFile(jsonUrl, JSON.stringify(items, null, 4), function (err) {
            if (err) throw err;
            res.send(formData);
        });
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});