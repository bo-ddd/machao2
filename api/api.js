import axios from "axios";

let baseUrl = '/api';
// let token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000, //如果接口一秒都没有返回结果，则axios会自动帮我们做一个失败(reject)的处理
    headers: { 'Content-Type':'application/json','Accept':'application/json'}, //在发送服务端之前，前端设置请求头信息；
});


/**
 * @description 注册接口
 * @param payload object
 * @param payload.username String 用户名，6-20位之间
 * @param payload.password String 密码，6-20位之间
 * @param payload.avatarName String 昵称，1-12位之间
 * @param payload.phoneNumber  String  手机号
 */
export const registerApi = function (payload = {}) {
    return instance.post('/user/register', payload)
}
/**
 * @description 注册接口
 * @param payload object
 * @param payload.username String 用户名，6-20位之间
 * @param payload.password String 密码，6-20位之间
 */
export const loginApi = function (payload = {}) {
    return instance.post('/user/login', payload)
}