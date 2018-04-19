/**
 * Created by padipata on 2017/4/19.
 * 此类用于对mint-ui库的二次封装,方便项目使用
 */
import {Toast,Indicator} from 'mint-ui'

export default {
  //提示
  toast(msg){
    Toast({
      message: msg,
      duration: 1500
    });
  },

  //开启loading
  showLoading(msg){
    Indicator.open(msg);
  },

  //关闭
  hideLoading(){
    Indicator.close();
  }
}
