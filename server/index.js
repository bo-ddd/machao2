const App = require('./app')
const app = new App();

module.exports = {
    path: '/api',
    handler: app.instance
}