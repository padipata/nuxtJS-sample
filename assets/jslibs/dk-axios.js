/**
 * Axios 基础封装
 * Created by padipata on 2017/4/19.
 */

import axios from 'axios'
import utils from './dk-utils'
import {apiDomain} from '../../configs/enviroment'
import {FINAL_URL} from '../../configs/wx-login'

const dkAxios = axios.create({
  baseURL: apiDomain,
  headers: {
    'X-Access-Token': process.broswer ? utils.getCookie('access_token') : ''
  },
  timeout: 20000,
});

dkAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let {status, data} = error.response;
  switch (status) {
    case 400:
      console.log(data, "response error")
      break;
    case 401:
      //用户凭证校验不通过,需要重新登录
      Utils.setCookie("projectName_token", '') //因为token无效而需要的重定向必须要先清空！！!
      location.href = FINAL_URL;
      break;
    default:
      return Promise.reject(error.response);
  }
});

export default dkAxios
