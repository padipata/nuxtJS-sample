/**
 * Created by ivancai on 2018/2/5.
 * 开发环境，测试环境，生产环境配置
 * 测试环境比较少用到，一般大型项目才划分出此环境
 */
const DEV = "http://order.luckydd.cn/"
const TEST = ""
const PRO = ""
const FINAL_PRO_DOMAIN = "dankal.cn" //最终线上地址一级域名
const isSupportNormalBrower="true" //是否支持普通浏览器运行,目前大多移动端项目只支持微信环境下,默认设置成false,开发环境设置成true
/**
 * 一般用当前浏览器的域名判断是否包含FINAL_PRO_DOMAIN，如果是则加载生产环境的配置，否则加载开发环境配置
 */
let apiDomain = DEV
// location.hostname.indexOf(FINAL_PRO_DOMAIN) == -1 ? DEV : PRO //indexOf()==-1说明是不包含,请注意
module.exports = {
  apiDomain,
  isSupportNormalBrower
}
