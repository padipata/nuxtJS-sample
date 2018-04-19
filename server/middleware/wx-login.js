const axios = require('axios')
const {apiDomain, isSupportNormalBrower} = require('../../configs/enviroment')
const FINAL_URL = require('../../configs/wx-login').FINAL_URL

module.exports = function (req, res, next) {
  let token = '', ua = req.headers['user-agent']
  console.log(ua, 'ua')

  if (ua.indexOf('MicroMessenger') == -1 && isSupportNormalBrower) { //如果不是微信浏览器并且支持普通浏览器环境运行，不做微信授权登陆
    next();
    return
  }

  token = req.cookies.projectName_token
  console.log(token, "token")

  let code = req.query.code

  if (!token) {  //token为空,需要进行微信登录
    if (!code) { //code也为空,说明还没有进行登录授权重定向
      res.redirect(FINAL_URL)
    }

    else { //已进行登录授权,将获得code与我们服务器交换token
      axios({
        url: apiDomain + 'api/wechat/login',
        method: 'POST',
        data: "code=" + code
      }).then(response => {
        var serverRes = response.data
        if (serverRes.state == '0001') {
          var token = serverRes.result.user_token
          res.cookie('projectName_token', token, {expires: new Date(Date.now() + 7 * 24 * 3600 * 1000)}); //设置token存储有效期，一般设置为一星期,最长不能超过后台设置的有效期
          next()
        } else {
          //服务器登录错误，请根据具体判断是否需要重新进行登录授权,一般是因为code失效需要再次授权
          res.redirect(FINAL_URL)
        }
      }).catch(error => {
        console.log(error, "error")
      })
    }
  } else {
    next()
  }

}
