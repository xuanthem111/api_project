const User = require('../models/user')

module.exports = function(req, res, next) {
    try {
        const username = req.body.user_name;
        if (username.length > 0) {
            User.findOne({user_name: username})
            .then(data => {
                if (data) {
                    res.status(401).json(
                        {status: "failed",
                         message: "User is exist",
                         data: []
                    })
                } else {
                    next()
                }
                
            })
            
        } else {
            res.status(401).json({status: "failed", message: "User name not invalid"})
        }
    } catch (e) {
        res.status(401).json({status: "failed", message: e.message})
    }
    
    
}