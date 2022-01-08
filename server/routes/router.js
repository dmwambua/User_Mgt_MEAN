const express = require('express');
//we do not use const app = express() because this would create a new app, instead, we use the method of express and call route in the .get instead of app.get and now you can import the route file into server.js and use the routes
const route = express.Router();

const services = require('../services/render')
route.get('/', (req, res) => {
    //renders html is index.ejs. no need to specify ejs because it is initialized above
    res.render('index');
})

route.get('/add-user', (req, res) => {
    //renders add_user.ejs template
    res.render('add_user');
})
route.get('/update-user', (req, res) => {
    //renders add_user.ejs template
    res.render('update_user');
})

module.exports = route;