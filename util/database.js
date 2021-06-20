const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-express',
    password: '12345678sh'
});

module.exports = pool.promise();