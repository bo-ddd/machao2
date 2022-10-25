const jwt = require('jsonwebtoken')
const key = 'xiaoxiaoming'
 
// 产生token的方法
function sign(load) {
  let payload = { data: load }
  let expiresIn = { expiresIn: 1000*60*30 }
  return jwt.sign(payload, key, expiresIn)
}
 
// 验证token 如果token不合法 jwt.verify(token, key)会报错
function verify(token) {
  try {
    jwt.verify(token, key)
  } catch (error) {
    return false
  }
  return true
}

module.exports = {
    sign,
    verify,
}