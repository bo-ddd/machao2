const App = require('../app')

class UserController extends App{
    constructor(){
        super()
    }

    info(ctx){
        const { res } = ctx;
        res.json({
            username: 'xiaoming'
        })
    }

    async list(ctx){
        const { res } = ctx;
        let data = await res.sql('select * from user_info');
        res.json(data);
    }

    async register(ctx){
        const { res, req } = ctx;
        const { username, password, phoneNumber } = req.body;
        
        if(!username){
            return res.fail('用户名不能为空');
        }else if(username.length < 6 || username.length > 20){
            return res.fail('用户名的长度必须在6-20位之间')
        }else if(password === undefined){
            return res.fail('密码不能为空');
        }else if(password.length < 6){
            return res.fail('密码长度不能少于6位')
        }else if(phoneNumber === undefined){
            return res.fail('手机号不能为空')
        }else if(phoneNumber.length != 11){
            return res.fail('手机号不正确,请重新输入')
        }
    
        const { sql } = res;
        // 添加手机号
        let userInfo = await sql('insert into user_info (phoneNumber) values(?)', [phoneNumber]);
        // 添加用户名和密码
        let userId = userInfo.data.insertId;
        let data = await sql('insert into user (username, password, userId) values(?,?)',[username, password, userId])
        res.json(data);
    }
}

module.exports = UserController;