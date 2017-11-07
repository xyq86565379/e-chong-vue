<template>
  <div class="home" ref="homeWrap">
    <div id="content">
      <activity></activity>
      <carouse></carouse>
      <mainad></mainad>
      <navrows></navrows>
      <purchase></purchase>
      <surprise :appContent="appContent"></surprise>
      <activity2></activity2>
      <classifyList :appContent="appContent"></classifyList>
      <activity3></activity3>
      <advertiseSite></advertiseSite>
      <activity4></activity4>
      <advertiseSite2></advertiseSite2>
      <activity5></activity5>
      <videoPlay></videoPlay>
      <copyright></copyright>
      <whiteSpace></whiteSpace>
    </div>

  </div>
</template>

<script>
  import activity from '../activity/activity.vue'
  import carouse from '../carouse/carouse.vue'
  import mainad from '../mainAD/mainAD.vue'
  import navrows from '../navrows/navrows.vue'
  import purchase from '../purchase/purchase.vue'
  import surprise from '../surprise/surprise.vue'
  import activity2 from '../activity/activity2.vue'
  import classifyList from '../classifyList/classifyList.vue'
  import activity3 from '../activity/activity3.vue'
  import advertiseSite from '../advertiseSite/advertiseSite.vue'
  import activity4 from '../activity/activity4.vue'
  import advertiseSite2 from '../advertiseSite/advertiseSite2.vue'
  import activity5 from '../activity/activity5.vue'
  import videoPlay from '../video/video.vue'
  import copyright from '../copyright/copyright.vue'
  import whiteSpace from '../whiteSpace/whiteSpace.vue'

  import BScroll from 'better-scroll'

  export default {
    props:{
      appContent:Object
    },
    components:{
      activity,
      carouse,
      mainad,
      navrows,
      purchase,
      surprise,
      activity2,
      classifyList,
      activity3,
      advertiseSite,
      activity4,
      advertiseSite2,
      activity5,
      videoPlay,
      copyright,
      whiteSpace
    },
    methods:{
      _initScroll(){
        this.$nextTick(() => {
          setTimeout(()=>{

            this.scroll = new BScroll(this.$refs.homeWrap, {
              click:true,
              scrollY:true,
              momentum: true,
              HWCompositing: true,
              scrollbar:true
            })
          },30)
//        this.scroll.refresh();
        })
      }
    },
    mounted(){
      console.log(this.appContent.hours);
      this._initScroll()
    }
  }
</script>

<style  lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .home{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    #content {
      width: 100%;
      margin-top: 172/@rem;
    }

  }
</style>


