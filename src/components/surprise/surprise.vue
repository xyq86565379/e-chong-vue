<template>
  <div class="surprise">
    <div class="surprise-tit">
      <div class="icon">
        <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
      </div>
      <div class="countdown-time">
        <span>距本场结束</span>
        <p class="hours" >{{appContent.Countdown.hours}}</p>
        <span class="" >:</span>
        <p class="minutes" >{{appContent.Countdown.minutes}}</p>
        <span class="">:</span>
        <p class="seconds" >{{appContent.Countdown.seconds}}</p>
      </div>
      <div class="more">
        <a href="#">
          <img src="https://img2.epetbar.com/nowater/2017-11/02/09/3b8b4e66523f7e91abe01a2751bbb1d0.png">
        </a>
      </div>
    </div>
    <div class="surprise-list-wrap" ref="surpriseWrap">
      <ul class="surprise-list">
        <li v-for="surprise in appContent.flashSale">
          <img :src="surprise.listUrl">
          <div>
            <span class="item1">¥</span>
            <span class="item1" v-if="surprise.price">{{surprise.price}}</span>
          </div>
          <span class="item2">省¥</span>
          <span class="item2" v-if="surprise.oldPrice">{{surprise.oldPrice}}</span>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:['appContent'],
    data(){
      return {

      }
    },
    components:{

    },
    mounted(){

//      console.log(this.$refs.surpriseWrap)
      this.$nextTick(() => {
        console.log(this.appContent,this.appContent.Countdown)
        setTimeout(()=>{
          if(!this.scroll) {
            this.scroll = new BScroll(this.$refs.surpriseWrap, {
              click: true,
              scrollX: true,
              momentum: true,
              HWCompositing: true
            })
          }
        },30)

      })

    }


  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .surprise{
    width: 100%;
    height: 381/@rem;
    position: relative;
    .surprise-tit{
      position: absolute;
      top: 80/@rem;
      .icon{
        width: 210/@rem;
        position: absolute;
        img{
          width: 100%;
          height: 48@rem;
        }

      }
      .countdown-time{
        font-size: 26/@rem;
        position: relative;
        left: 240/@rem;
        span{ }
        p{
          display: inline-block;
          width: 36/@rem;
          height: 36/@rem;
          border: 2/@rem solid #ddd;
          text-align: center;
          padding: 8/@rem 0 0 2/@rem;
        }
        .hours{ }
        .minutes{ }
        .seconds{ }
      }
      .more{
        position: absolute;
        top: -20/@rem;
        left: 630/@rem;
        img{
          width: 135/@rem;
          height: 80/@rem;
        }
      }
    }
    .surprise-list-wrap{
      height: 100%;
      width: 100%;
      position: absolute;
      top: 150/@rem;
      .surprise-list{
        height: 261/@rem;
        width: 1800/@rem;
        li{
          font-size: 12px;
          float: left;
          width: 169/@rem;
          height: 261/@rem;
          margin-left: 40/@rem;
          text-align: center;
          .item1{
            color: red;
            font-size: 14px;
          }
          .item2{
            color: #666;
          }
          img{
            width: 169/@rem;
            height: 169/@rem;
          }
        }
      }
    }
  }
</style>


