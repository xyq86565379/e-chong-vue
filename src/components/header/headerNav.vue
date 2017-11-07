<template>
  <div class="find_nav">
    <div class="nav-wrap" ref="navWrap">
      <ul class="nav-list">
        <li>
          <router-link to="/App">首页</router-link>
        </li>
        <li>
          <router-link to="/clothing">服饰城</router-link>
        </li>
        <li>
          <a href="javascript:;">狗狗主粮</a>
        </li>
        <li>
          <a href="javascript:;">医疗保健</a>
        </li>
        <li>
          <a href="javascript:;">零食玩具</a>
        </li>
        <li>
          <a href="javascript:;">日用外出</a>
        </li>
        <li>
          <a href="javascript:;">美容香波</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    components:{

    },
    mounted(){
      this.$nextTick(() => {
        setTimeout(()=>{
          this.scroll = new BScroll(this.$refs.navWrap, {
            click:true,
            scrollX:true,
            momentum: true,
            HWCompositing: true
          })
        },30)
      })
    },
    updated(){
      this.scroll.refresh();//此处写在重置中
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .find_nav{
    position: absolute;
    top: 120/@rem;
    .nav-wrap{
      width: 750/@rem;
      font-size: 28/@rem;
        .nav-list{
          width: 1050/@rem;
          text-align: center;
          overflow: hidden;
          li{
            float: left;
            width:149/@rem;
            position: relative;
          a{

          }
          i{
            position: absolute;
            bottom: -12/@rem;
            left: 24%;
            width: 52%;
            height: 4/@rem;
            background: green;
          }
        }
      }
    }
  }
</style>


