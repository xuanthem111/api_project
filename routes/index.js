const Router = require('express').Router;
const User = require('../models/user');
const userRouters = require('./userRouters');

const router = Router();

// test
router.get('/', function(req, res, next) {
    const ducy = new User({
        user_name: "ducy23061999", 
        password: "tranducy", 
        first_name: "Tran", 
        last_name: "Duc Y"
    });
    res.send("OK")
    // ducy.save(function() {
    //     res.send("OK")
    // });
})
router.use('/api/users', userRouters);



module.exports = router;