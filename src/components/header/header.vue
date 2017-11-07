<template>
  <div id="header">
    <div class="headwrap">
      <div class="notice">
        <a href="#">
          <span class="dogSite" v-if="appContent.pet">{{appContent.pet[1]}}</span>
          <span class="split">|</span>
          <span class="mySite" v-if="appContent.provinces && appContent.provinces[0].citys[0].citysName">{{appContent.provinces[0].citys[0].citysName}}</span>
          <i></i>
        </a>
      </div>
      <p class="search-text">
        <a href="#">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="serach-icon"></span>
        </a>
      </p>
      <a href="#" class="epet-category">
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      appContent:Object
    },
    components:{

    }
  }



</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  #header{
    /*<!--width: 750/@rem;-->*/
    position: absolute;
    top: 0;
    width: 100%;
    height:172/@rem;

    .headwrap{
      font-size: 28/@rem;
      width: 100%;
      height: 100%;
      .notice{
        width: 100%;
        height: 50/@rem;
        margin: 0 20/@rem;
        position: relative;
        top: 50/@rem;
        a{
          display: block;
          position: absolute;

          .dogSite{

          }
          .split{

          }
          .mySite{
            font-size: 24/@rem;
          }
          i{
            position: absolute;
            top: 12/@rem;
            right: -22/@rem;
            border-width: 8/@rem;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
          }
        }
      }
      .search-text{
        width: 100%;
        height: 50/@rem;
        position: relative;
        top: -10/@rem;
        a{
          position: absolute;
          left: 228/@rem;
          display: block;
          width: 440/@rem;
          height: 50/@rem;
          border: 0;
          background: #e9e9e9;
          border-radius: 8/@rem;
          color: #bcbcbc;
          text-indent: 5/@rem;
          font-size: 26/@rem;
          outline: 0;
          input{
            margin-top: 10/@rem;
          }
        }
      }
      .epet-category{
        display: block;
        top: 38/@rem;
        right: 16/@rem;
        position: absolute;
        img{
          width: 50/@rem;
          margin-left: 20/@rem;
        }
      }
    }


  }
</style>


