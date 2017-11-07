<template>
  <div class="clothing">
    <headerNav v-if="$route.path=='/clothing'"></headerNav>
    <div id="clotContWrap" ref="wrapper">
      <div id="content">
        <ul>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
          <li>服装厂</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import header from '../header/header.vue'
  import footerComponent from '../footer/footer.vue'
  import headerNav from '../header/headerNav.vue'
  import BScroll from 'better-scroll'

  export default {
    components:{
      'e-pet-header':header,
      'footerComponent':footerComponent,
      'headerNav':headerNav
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
  @rem:750/16rem;
  .clothing{
    position: absolute;
    top:0;
    #clotContWrap{
      width: 100%;
      height: 1053/@rem;
      overflow: hidden;
      position: relative;
      top: 172/@rem;
      #content{
        position: relative;
        top: 172/@rem;
        margin-top: -172/@rem;
      }

    }
  }




</style>


