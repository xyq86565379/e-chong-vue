<template>

    <div id="outer-wrap">
      <!--vm中有个实例对象$route 用来判断当前路由路径的-->
      <myhome v-if="$route.path=='/App'||$route.path=='/'" :appContent="appContent"></myhome>
      <div class="realHead">
        <e-pet-header :appContent="appContent"></e-pet-header>
        <headerNav v-if="$route.path=='/App'||$route.path=='/'"></headerNav>
      </div>
      <footerComponent></footerComponent>
      <router-view></router-view>
    </div>


</template>

<script>
import header from './components/header/header.vue'
import footerComponent from './components/footer/footer.vue'
import home from './components/home/home.vue'
import headerNav from './components/header/headerNav.vue'

import axios from 'axios'

export default {

  components:{
    'e-pet-header':header,
    'footerComponent':footerComponent,
    'myhome':home,
    'headerNav':headerNav
  },
  data(){
    return {
      appContent:{}
    }
  },
  mounted(){
    //第一种 使用vue-resource发送ajax请求express提供的接口
//    this.$http.get('/api/App')
//      .then(response => {
//        let result = response.body
//        console.log('vue-resource express',result)
//      })
    //第二种 使用axios发送ajax请求mockjs提供的接口
    axios.get('/api/App')
      .then(response=>{
        let result = response.data
//        console.log('axios mockjs',result)
        this.appContent = result.data
      console.log('appContent',this.appContent.Countdown)
      })
  }

}

</script>

<style lang="less" rel="stylesheet/less">
  @import '../static/css/reset.css';
  @rem:750/16rem;

  #outer-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .realHead{
      background: white;
      width: 100%;
      height: 172/@rem;
      position: absolute;
      top: 0;

    }

  }



</style>
