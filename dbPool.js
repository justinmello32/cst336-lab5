const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "qs3490be04rfkrym",
    password: "dn9u4qbpwxwqltra",
    database: "jt0o6rrqvwphvmwa"
});

module.exports = pool;
