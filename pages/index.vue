<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    text-align: center;
    .title {
      margin-top: 1rem;
    }
    .intro {
      color: darkgray;
    }
    .list-container {
      margin: 0.6rem 0.2rem 0;
      li {
        display: flex;
        width: 100%;
        height: 1rem;
        align-items: center;
        margin-top: 0.2rem;
        padding-left: 0.3rem;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1)
      }
    }
  }
</style>

<template>
  <section class="container">
    <p class="title large-text" @click="event().onClick()">Yipage</p>
    <p class="intro">一页科技移动端组件库</p>
    <ul class="list-container">
      <li class="middle-text" v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </section>
</template>
<script>
  import {getAddressList} from '~/api/api'

  export default {
    data() {
      return {
        list: ['平台登录', '微信登录授权', '常见问题', '意见反馈', '搜索页', '轮播图', '收货地址', '评价', '反馈弹窗']
      }
    },
    async asyncData() {
//      接口已失效
//      let {data, status} = await getAddressList().catch(error => {
//        this.$uihelper.toast(error.data.error.message);
//      });
//      console.log(data,'data');
//      console.log(status,'status')
    },
    methods: {
      event() {
        let self = this;
        return {
          //点击事件
          onClick() {
            self.$uihelper.toast('mint-ui-toast');
          },
        }
      },
      network() {
        let self = this;
        return {}
      },
      handler() {
        let self = this;
        return {}
      }
    },
    async created() {

    },
    components: {},

    /**
     * 监听数据变化
     * 例子：
     * highlight(){
        return this.code.length == this.codeLength && this.phone.length == this.phoneLength ? true : false
      }
     * v-if="highlight"
     */
    computed: {}
  }
</script>


