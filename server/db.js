const mysql = require('mysql')

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'bj-cynosdbmysql-grp-790w57fi.sql.tencentcdb.com',
            port: '26451',
            user: 'root',
            password: 'genglei-1',
            database: 'machao_official'
        });
        this.connect();
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + this.connection.threadId);
        });
    }
}

module.exports = Database;