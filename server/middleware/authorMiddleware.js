const Jwt = require('../../assets/util/jwt');
module.exports = function (connection) {
    return function (req, res, next) {
        const urlList = [''];
        if(urlList.includes(req.url)){
            let bool = Jwt.verify(req.headers.authorization);
            if(bool){
                next();
            }else{
                res.json({
                    status:401,
                    msg:'token验证失效',
                    data:[],
                })
            }
        }else{
            next();
        }
    }
}