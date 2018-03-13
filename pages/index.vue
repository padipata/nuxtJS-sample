<style lang="scss">
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
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1)
      }
    }

  }

</style>

<template>
  <section class="container">
    <p class="title large-text">Dankal</p>
    <p class="intro">蛋壳创意移动端组件库</p>
    <ul class="list-container">
      <li class="middle-text" v-for="item in list">{{item}}</li>
    </ul>
  </section>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import Axios from 'axios'
  export default {
    data(){
      return {
        list: ['平台登录', '微信登录授权', '常见问题', '意见反馈', '搜索页', '轮播图', '收货地址', '评价', '反馈弹窗']
      }
    },
    async asyncData(){
      let {data} = await Axios.get('http://order.luckydd.cn/api/Commodity/classly')
      return {
        msg: data.message
      }
    },
    components: {
      Logo
    },
    async created(){
//     let {data}=await Axios.get('http://order.luckydd.cn/api/Commodity/classly')
    }
  }
</script>


