var Userdb = require('../model/model');
//API 
//create and save new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }

    //new user. The data will be stored in the const variable user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || ""
            })
        })

}

//retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {

}

//Update a new identified user by user id
exports.update(req, res) => {

}

//Delete a user with a specified user id in the request
exports.delete = (req, res) => {

}