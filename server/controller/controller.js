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
                message: err.message || "An error occurred while creating user"
            });
        });

}

//retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {
    //getting a specific user
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error in retrieving user with id " + id })
            })
    }
    //get data from db and return a response
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while retrieving user information" })
        })
}

//Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be blank" })
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot update user with ${id}. User may not be existing" })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error in updating user information" })
        })

}


//Delete a user with a specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) { res.send(404).send({ message: "Cannot delete id ${id}. id my not be existing" }) } else {
                res.send({ message: "User was deleted successfully" })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete user with id = " + id });
        });
}