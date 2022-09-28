const express = require('express')
const Database = require('./db')
const requestMiddleware = require('./middleware/requestMiddleware')
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
        this.matchRoute();
    }

    matchRoute(){
        this.app.post('/:controller/:api', (req, res)=>{
            const { controller, api } = req.params;
            let filePath = path.resolve(this.baseUrl, controller + '.js');
            let CtrlConstructor = require(filePath);
            let ctrl = new CtrlConstructor();
            ctrl.ctx = {req, res};
            ctrl[api]();
        })
    }

    use(name, router){
        this.app.use(name, router);
    }
}

module.exports = App;