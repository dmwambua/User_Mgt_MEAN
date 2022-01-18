const express = require('express');
//we do not use const app = express() because this would create a new app, instead, we use the method of express and call route in the .get instead of app.get and now you can import the route file into server.js and use the routes
const route = express.Router();

/**
 * @description Root Route
 * @method GET /
 */
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
/**
 * @description add user
 * @method GET / add_user
 */

route.get('/add-user', services.add_user);
/**
 * @description update user
 * @method GET / update-user
 */

route.get('/update-user', services.update_user);

//API route. post creates and adds the user
//route goes to users
//controller.create method is called when the post matches route.post api/users method
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;