import dkAxios from '../assets/jslibs/dk-axios'
import utils from '../assets/jslibs/dk-utils'
import env from '../configs/enviroment'

/*
  地址列表
 */
const getAddressList = () => {
  return dkAxios({
    url: 'app/address/receiver',
    method: 'get',
    headers: {
      'X-Access-Token': process.BROWSER_BUILD?utils.getCookie('access_token'):''
    }
  })
};

/*
  图片上传七牛云
 */
const uploadImg = data => {
  return dkAxios({
    url: env.QINIU_UPLOAD_DOMAIN,
    headers: {
      'content-type': 'multipart/form-data'
    },
    method: 'post',
    data
  })
};

//导出模块
export {
  uploadImg,
  getAddressList,
}

