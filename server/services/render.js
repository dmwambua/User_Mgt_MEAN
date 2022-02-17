//render.js is used to render files using router helping separate callback functions from the routes that are in router.js for easy maintenance
//Axios is a promise-based HTTP client that works in the browser and Node. js environment or, in simpler terms, it is a tool for making requests (e.g API calls) in client-side applications and Node

const axios = require('axios');
//const { response } = require("express");
exports.homeRoutes = (req, res) => {
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
         
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}
exports.add_user = (req, res) => {
    res.render('add_user');
}
exports.update_user = (req, res) => {
    res.render('update_user');
}