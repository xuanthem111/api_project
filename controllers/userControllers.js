require('dotenv').config();
const userServices = require('../services/userServices')
const jwt = require('jsonwebtoken')
const privateKey = process.env.APP_PRIVATE_KEY;

module.exports = {
    login: function(req, res, next) {
        const user_name = req.body.user_name;
        const password = req.body.password;
        
        userServices.login(user_name, password)
        .then(data => {
            const authToken = jwt.sign({data}, privateKey);
            res.set('Token', authToken);
            res.json({data})
        })
        .catch(error => next(error))
    },
    register: function(req, res, next) {
        const body = req.body;
        userServices.register(body)
        .then(data => res.send({status: "success", data}))
        .catch(error => next(error));

    },
    getAllUsers: function(req, res, next) {
        userServices.getAllUser()
        .then(data => res.send({data}))
        .catch(error => next(error));
    },
    
    getUserById: function(req, res, next) {
        const userId = req.params.id;
        userServices.getUser(userId)
        .then(data => res.send({data}))
        .catch(error => next(error));
    },
    
    deleteUser: function(req, res, next) {
        const userId = req.params.id;
        userServices.deleteUser(userId)
        .then(() => res.send({message: "success"}))
        .catch(error => next(error));
    },
    updateUser: function(req, res, next) {
        const userId = req.params.id;
        
        userServices.updateUser(userId, req.body)
        .then(() => res.send({message: "success"}))
        .catch(error => next(error))

    }
}