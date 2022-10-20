const App = require('../app');
const Jwt = require('../../assets/util/jwt.js');
class UserController extends App {
    constructor() {
        super();
    }
    info() {
        const { res } = this.ctx;
        res.success({
            username: 'xiaoming'
        })
    }

    async list() {
        const { res } = this.ctx;
        let data = await res.sql('select * from user_info');
        res.json(data);
    }

    async register() {
        const { res, req } = this.ctx;
        const { username, password, phoneNumber } = req.body;

        if (!username) {
            return res.fail('用户名不能为空');
        } else if (username.length < 6 || username.length > 20) {
            return res.fail('用户名的长度必须在6-20位之间')
        } else if (password === undefined) {
            return res.fail('密码不能为空');
        } else if (password.length < 6) {
            return res.fail('密码长度不能少于6位')
        } else if (phoneNumber === undefined) {
            return res.fail('手机号不能为空')
        } else if (phoneNumber.length != 11) {
            return res.fail('手机号不正确,请重新输入')
        }

        this.connection.beginTransaction( (err) => {
            if(err) {
                res.fail(err);
            };

            // 添加手机号
            this.connection.query('insert into user_info (phoneNumber) values(?)', [phoneNumber],(error, userInfo)=>{
                console.log(userInfo);
                if(error){
                    return this.connection.rollback(res.fail('添加手机号失败'));
                }

                let userId = userInfo.insertId;
                // 添加用户名和密码
                console.log(username,password, userId)
                this.connection.query('insert into user (username, password, userId) values(?, ?, ?)', [username, password, userId],(error, data)=>{
                    if(error){
                        return this.connection.rollback(res.fail('添加用户信息失败'))
                    }
                    res.success(data);
                });
            })

        })
    }

    async login(){
        const { res, req } = this.ctx;
        const { username , password } = req.body;
        let data =await res.sql('select * from user where username=? and password=?',[username,password]);
        if(data.data.length){
            let resData = data.data[0];
            let token = Jwt.sign(resData);
            res.success({'token':token});
        }else{
            res.fail('fail')
        }
    }
}

module.exports = UserController;