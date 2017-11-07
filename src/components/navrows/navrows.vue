<template>
  <div id="wrap">
    <div class="row">
      <div class="item">
        <a href="javascript:;" class="a1">E宠团</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">清仓特价</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">品牌特卖</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">E宠国际</a>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <a href="javascript:;" class="a1">新品周刊</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">体验馆</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">新汪课堂</a>
      </div>
      <div class="item">
        <a href="javascript:;" class="a1">潮品视频</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .a1{
    text-decoration: none;
    color: rgba(255,255,255,.8);
    display: block;
    font-size: 24/@rem;
    line-height: 60/@rem;
    font-family: helvetica;
  }
  #wrap{
    position: relative;
    top: 50/@rem;
    height: 351/@rem;
    background: rgb(241,71,100);
  }
  #wrap .row{
    display: -webkit-box;
    display: flex;
    padding-top: 4%;
  }
  #wrap .row .item{
    width: 0;
    -webkit-box-flex:1 ;
    flex: 1;
    text-align: center;
  }

  #wrap .row .item a:before{
    width: 86/@rem;
    height: 86/@rem;
    content: "";
    display: block;
    background-size:86/@rem 86/@rem !important;
    margin: 0 auto;
  }

  #wrap .row:nth-child(1) .item:nth-child(1) a:before{
    background: url(../../assets/icon1.png) no-repeat;
  }
  #wrap .row:nth-child(1) .item:nth-child(2) a:before{
    background: url(../../assets/icon2.png) no-repeat;
  }
  #wrap .row:nth-child(1) .item:nth-child(3) a:before{
    background: url(../../assets/icon3.png) no-repeat;
  }
  #wrap .row:nth-child(1) .item:nth-child(4) a:before{
    background: url(../../assets/icon4.png) no-repeat;
  }
  #wrap .row:nth-child(2) .item:nth-child(1) a:before{
    background: url(../../assets/icon5.png) no-repeat;
  }
  #wrap .row:nth-child(2) .item:nth-child(2) a:before{
    background: url(../../assets/icon6.png) no-repeat;
  }
  #wrap .row:nth-child(2) .item:nth-child(3) a:before{
    background: url(../../assets/icon7.png) no-repeat;
  }
  #wrap .row:nth-child(2) .item:nth-child(4) a:before{
    background: url(../../assets/icon8.png) no-repeat;
  }
</style>


