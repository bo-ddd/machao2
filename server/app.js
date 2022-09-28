const express = require('express')
const Database = require('./db')
const requestMiddleware = require('./middleware/requestMiddleware')
const path = require('path');


class Transaction {
    constructor(connection) {
        this.connection = connection;
    }

    create(callback) {
        this.connection.beginTransaction((err) => {
            if (err) { 
                this.connection.fail(err)
            }
            try {
                callback();
            } catch (error) {
                this.rollback(error);
            }
        });
    }
}

class Connection {
    constructor(connection) {
        this.connection = connection;
        this.transaction = null;
    }

    beginTransaction(callback) {
        this.transaction = new Transaction(this.connection);
        this.transaction.create({
            callback,
            errCallback(err){
                
            }
        })
        return this.transaction;
    }

    rollback(error){
        return this.transaction.rollback(error)
    }

    query(sql, values = []) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (err, data) => {
                if (err) {
                    reject({
                        status: 0,
                        msg: 'error',
                        data: []
                    });
                } else {
                    resolve({
                        status: 1,
                        msg: 'success',
                        data
                    });
                }
            });
        });
    }
}

class App {
    constructor() {
        this.app = this.instance = express()
        this.db = new Database();
        this.connection = this.db.connection;
        this.baseUrl = './server/controller'
        this.init();
    }

    init() {
        this.app.use(express.json())
        this.app.use(requestMiddleware(this.connection));
        this.matchRoute();
    }

    matchRoute() {
        this.app.post('/:controller/:api', (req, res) => {
            const { controller, api } = req.params;
            let filePath = path.resolve(this.baseUrl, controller + '.js');
            let CtrlConstructor = require(filePath);
            let ctrl = new CtrlConstructor();
            ctrl.ctx = { req, res };
            ctrl[api]();
        })
    }
}

module.exports = App;