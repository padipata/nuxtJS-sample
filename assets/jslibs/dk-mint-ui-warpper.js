/**
 * Created by padipata on 2017/4/19.
 * 此类用于对mint-ui库的二次封装,方便项目使用
 */
import {Toast,Indicator} from 'mint-ui'

export default {
  toast(msg){
    Toast({
      message: msg,
      duration: 1500
    });
  },
  showLoading(msg){
    Indicator.open(msg);
  },
  hideLoading(){
    Indicator.close();
  }
}
