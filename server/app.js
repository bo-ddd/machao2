const express = require('express')
const Database = require('./db')
const requestMiddleware = require('./middleware/requestMiddleware')
const fs = require('fs')
const path = require('path')

class App{
    constructor(){
        this.app = this.instance = express()
        this.db = new Database();
        this.connection = this.db.connection;
        this.baseUrl = './server/controller'
        this.init();
    }

    init(){
        this.app.use(express.json())
        this.app.use(requestMiddleware(this.connection));
        this.matchRoute.call(this);
    }

    matchRoute(){
        this.app.post('/:controller/:api', (req, res)=>{
            const { controller, api } = req.params;
            console.log('-----------req.params------------')
            console.log(req.params)
            let filePath = path.resolve(this.baseUrl, controller + '.js');
            let CtrlConstructor = require(filePath);
            let ctrl = new CtrlConstructor();
            const ctx = {req, res};
            ctrl[api](ctx);
        })
    }

    use(name, router){
        this.app.use(name, router);
    }
}

module.exports = App;