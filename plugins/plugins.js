import Vue from 'vue'
import MintUI from 'mint-ui'
import Axios from 'axios'
import Utils from '../assets/jslibs/dk-utils'
import {apiDomain} from '../configs/enviroment'
import {FINAL_URL} from '../configs/wx-login'
import '../assets/jslibs/rem'
import '../assets/styles/app.scss'
Vue.use(MintUI)
Axios.defaults.baseURL = apiDomain
Axios.defaults.headers.token = Utils.getCookie("projectName_token")
Axios.interceptors.response.use(function (response) {
  console.log(response, "http response")
  return response;
}, function (error) {
  let {status, data} = error.response
  switch (status) {
    case 400:
      console.log(data, "response error")
      break;
    case 401:
      //用户凭证校验不通过,需要重新登录
      Utils.setCookie("projectName_token", '') //因为token无效而需要的重定向必须要先清空！！!
      location.href = FINAL_URL
      break;
    default:
      return Promise.reject(error);
  }

});
Vue.prototype.$axios = Axios



