const User = require('../models/user');
const Role = require('../models/role');

module.exports = {
    login: function(username, password) {
        let userCache;
        return User.findOne({user_name: username, password})
            .then(userFound => {
                userCache = userFound;
                const roleId = userFound.role_id;
                return Role.findOne({_id: roleId})
            })
            .then(role => {
                const userData = Object.assign({role: role.role}, userCache._doc)
                delete userData.password
                delete userData.role_id
                return Promise.resolve(userData)
            })
    },
    register: function(user) {
        return new Promise(function(res, rej) {
            const role = Role.findOne({role: user.role}).then(roleFound => {
                user.role_id = roleFound._id;

                const newUser = new User(user);
                newUser.save(function (err) {
                    if (err) {
                        rej({message: "error"})
                    } else {
                        res(newUser)
                    }
                
                }); 
            });
           
        })  
    },
    
    getAllUser: function() {
        return User.find();
    },
    deleteUser: function(userId) {
        return new Promise(function(resolve, reject) {
            User.deleteOne({_id: userId}, function(err) {
                if (!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    },
    getUser: function(userId) {
        return User.findOne({_id: userId});
    },
    
    updateUser: function(userId, data) {
        const role = data.role;
        return Role.findOne({role: role})
        .then(roleData => new Promise(function(resolve, reject) {
            data.role_id = roleData._id;

            delete data.role;
            User.updateOne({_id: userId}, data, function(err) {
                if (!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        }))
       
    }
}