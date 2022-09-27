const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'bj-cynosdbmysql-grp-790w57fi.sql.tencentcdb.com',
    port: '26451',
    user: 'root',
    password: 'genglei-1',
    database: 'exam'
})

console.log('-----------connection------------- db.js')
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;