/**
 * Created by padipata on 2018/4/19.
 * 此工具类请放置一些常用操作函数，如字符操作，存取cookie等
 */

export default {
  /**
   * 获取 Cookie
   * @param cname
   * @return {*}
   */
  getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  },

  /**
   * 提取 url 参数
   * @param name
   * @return {null}
   */
  getQueryString(name)
  {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
  },

  /**
   * 存储 Cookie
   * @param cname
   * @param cvalue
   * @param exdays
   */
  setCookie (cname,cvalue,exdays) {
    let d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
  },

  /**
   * 移除数组中某个索引位
   * @param index
   * @param array 数组
   */
  rmOfArray(index, array) {
    let newArray = []
    array.forEach((value, $index) => {
      if (index != $index) {
        newArray.push(value)
      }
    });
    return newArray
  }

}
