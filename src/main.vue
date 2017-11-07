<template>
  <div id="outer-wrap" ref="wrapper">
    <carouse></carouse>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import activity from './components/activity/activity.vue'
import carouse from './components/carouse/carouse.vue'
import mainAD from './components/mainAD/mainAD.vue'
import navrows from './components/navrows/navrows.vue'
import purchase from './components/purchase/purchase.vue'
import surprise from './components/surprise/surprise.vue'
import activity2 from './components/activity/activity2.vue'
import classifyList from './components/classifyList/classifyList.vue'
import activity3 from './components/activity/activity3.vue'
import advertiseSite from './components/advertiseSite/advertiseSite.vue'
import activity4 from './components/activity/activity4.vue'
import advertiseSite2 from './components/advertiseSite/advertiseSite2.vue'
import activity5 from './components/activity/activity5.vue'
import videoPlay from './components/video/video.vue'
import copyright from './components/copyright/copyright.vue'
import footerComponent from './components/footer/footer.vue'

//import BScroll from 'better-scroll'

export default {

  components:{
    carouse
  },
  mounted(){
      this.$nextTick(() => {
        setTimeout(()=>{
          this.scroll = new BScroll(this.$refs.wrapper, {
            click:true,
            scrollY:true,
            momentum: true,
            HWCompositing: true
          })
        },30)
      })
  }
}

</script>

<style lang="less" rel="stylesheet/less">
  @import '../static/css/reset.css';
  #outer-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    #content{
      width: 100%;
    }
  }



</style>
