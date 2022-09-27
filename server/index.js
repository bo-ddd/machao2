const app = require('express')()
const connection = require('./db')

app.post('/user/info', (req, res)=>{
    res.json({
        username: 'xiaoming'
    })
})

app.post('/user/list', async (req, res)=>{
    console.log('/user/list is ok--------------')
    connection.query('select * from user_info', function(err, data){
        res.json({
            status: 1,
            data
        })
    })
})

module.exports = {
    path: '/api',
    handler: app
}