const app = require('express')()

app.post('/user/info', (req, res)=>{
    res.json({
        username: 'xiaoming'
    })
})

module.exports = {
    path: '/api',
    handler: app
}