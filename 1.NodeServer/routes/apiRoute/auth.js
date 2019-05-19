const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../utilities/key');
const UserModel = require('../../models/user');

route.post('/signin', (req, res) => {
    const user = new UserModel();
    user.signIn(req.body.name, req.body.password)
        .then(currentUser => {
            if (currentUser) {
                const token = jwt.sign({ data: currentUser }, key)
                res.status(200).send(token);
            }
            else {
                res.status(403).send("Access Denied");
            }

        })
        .catch(err => {
            res.status(403).send("Access Denied");
        })
});

route.post('/register', (req, res) => {
    const user = new UserModel();
    user.register(req.body.name, req.body.email, req.body.password)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            console.log(error);
            res.status(400).send("Unexcepted error occur")
        });
})

module.exports = route;