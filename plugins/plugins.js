import Vue from 'vue'
import MintUI from 'mint-ui'
import '../assets/styles/app.scss'
import UiHelper from '../assets/jslibs/dk-mint-ui-warpper'
import Utils from '../assets/jslibs/dk-utils'

Vue.prototype.$uihelper = UiHelper;
Vue.prototype.$utils=Utils;

Vue.use(MintUI);
