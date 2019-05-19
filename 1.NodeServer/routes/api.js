const express = require('express');
const jwt = require('jsonwebtoken');
const key = require('../utilities/key');
const route = express.Router();
const departmentsRoute = require('./apiRoute/department');
const UserModel = require('../models/user');

route.use('/departments',departmentsRoute);

route.post('/signin',(req,res)=>{
    const user = new UserModel();
    const currentUser = user.signIn(req.body.name,req.body.password);
    if(currentUser){
        const token = jwt.sign({data:currentUser},key)
        res.status(200).send(token);
    }
    res.status(403).send("Access Denied");
});

module.exports = route;

