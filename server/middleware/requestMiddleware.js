module.exports = function(connection){
    return function(req, res, next){
        res.fail = function(msg){
            res.json({
                status: 0,
                msg,
                data: []
            })
        };
    
        res.success = function(data){
            res.json({
                status:1,
                msg: 'success',
                data
            })
        };
    
        res.sql = function(sqlStr, values = []){
            return new Promise((resolve, reject)=>{
                connection.query(sqlStr, values, function(err, data){
                    if(err){
                        reject({
                            status: 0,
                            msg: err,
                            data: []
                        })
                    }else{
                        resolve({
                            status: 1,
                            msg: 'success',
                            data
                        })
                    }
                })
            })
        }
    
        next();
    }
}