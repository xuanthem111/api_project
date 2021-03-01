const Router = require('express').Router;
const User = require('../models/user');
const userRouters = require('./userRouters');
const path = require('path');
const router = Router();


router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

router.use('/api/users', userRouters);

module.exports = router;