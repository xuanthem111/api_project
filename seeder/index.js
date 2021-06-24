const seeder = require('mongoose-seed');

const users = [
    {
        'model': 'Role',
        'documents': [
           {
            '_id': '6034c179c7f75d27640b3f06',
            'role': 'admin',
            'note': 'Người quản trị cao nhất'
           },
           {
            '_id': '6034c179c7f75d27640b3f07',
            'role': 'user',
            'note': 'User người dùng phổ thông'
           }
        ]
    },
    {
        'model': 'User',
        'documents': [
            {
                'user_name': 'Them',
                'password': 'Nguyenxuanthem',
                'first_name': 'xuanthem',
                'last_name': 'nguyen',
                'role_id': '6034c179c7f75d27640b3f06'
            },
            {
                'user_name': 'A',
                'password': 'nguyenvana',
                'first_name': 'nguyenvan',
                'last_name': 'Duong',
                'role_id': '6034c179c7f75d27640b3f07'
            },
        ]
    }, 
]
seeder.connect('mongodb://localhost:27017/traning', function() {
    seeder.loadModels([
        './models/user.js',
        './models/role.js'
    ]);
    seeder.clearModels(['User', 'Role'], function() {
        seeder.populateModels(users, () => {
            seeder.disconnect()
        })
    })
})