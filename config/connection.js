const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/mongoverse');

connection.on('connected', () => {
    console.log('MongoDB successfully connected!');
});

module.exports = connection;
