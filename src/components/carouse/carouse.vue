<!--<template>-->
  <!--&lt;!&ndash;<div id="banner_wrap" ref="bannerWrap">&ndash;&gt;-->
    <!--&lt;!&ndash;<ul class="banner_list">&ndash;&gt;-->
      <!--&lt;!&ndash;<li><img src="../../assets/slide1.jpg"></li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li><img src="../../assets/slide2.jpg"></li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li><img src="../../assets/slide3.jpg"></li>&ndash;&gt;-->
      <!--&lt;!&ndash;<li><img src="../../assets/slide4.jpg"></li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--<div id="banner_wrap">-->
    <!--<el-carousel indicator-position="outside">-->
      <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <!--<img v-bind:src="'../../assets/slide'+item+'.jpg'">-->
        <!--&lt;!&ndash;<img v-bind:src="['xxx(需要拼接的字符串)'+item.picurl]" alt="" width="100%" height="245" />&ndash;&gt;-->
        <!--&lt;!&ndash;<a v-bind:href="'/forum/list/?id=' + id" >&ndash;&gt;-->

      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import BScroll from 'better-scroll'-->
  <!--export default {-->
    <!--component:{-->

    <!--},-->
<!--//    mounted(){-->
<!--//      this.$nextTick(() => {-->
<!--//        setTimeout(()=>{-->
<!--//          this.scroll = new BScroll(this.$refs.bannerWrap, {-->
<!--//            click:true,-->
<!--//            scrollX:true,-->
<!--//            momentum: true,-->
<!--//            HWCompositing: true,-->
<!--//            maxScrollX:375-->
<!--//          })-->
<!--//        },30)-->
<!--//      })-->
<!--//    }-->
  <!--}-->


<!--//  window.onload = function(){-->
<!--//    banner();-->
<!--//  };-->
<!--//-->
<!--//-->
<!--//  //banner区域-->
<!--//  function banner(){-->
<!--//    //获取元素-->
<!--//    var wrap = document.getElementById('ban_wrap');-->
<!--//    var list = document.getElementById('ban_list');-->
<!--//    //动态添加li-->
<!--//    list.innerHTML += list.innerHTML;-->
<!--//    var liNodes = document.querySelectorAll('#ban_list li');-->
<!--//    var spanNodes = document.querySelectorAll('#ban_navs span');-->
<!--//-->
<!--//    //布局-->
<!--//    var styleN = document.createElement('style');-->
<!--//    styleN.innerHTML += '#ban_list{width: '+ liNodes.length +'00%;}';-->
<!--//    styleN.innerHTML += '#ban_list li{width: '+ (100/liNodes.length) +'%;}';-->
<!--//    styleN.innerHTML += '#ban_wrap{height: '+ liNodes[0].offsetHeight +'px;}';-->
<!--//    document.head.appendChild(styleN);-->
<!--//-->
<!--//    //横向滑屏-->
<!--//    //定义元素初始位置，手指初始位置-->
<!--//    var eleX = 0;-->
<!--//    var startX = 0;-->
<!--//-->
<!--//    //保存2d变换每一次的位移值-->
<!--////			var translateX = 0;-->
<!--//-->
<!--//    //定时器-->
<!--//    var timer = 0;-->
<!--//    //模拟now-->
<!--//    var now = 0;-->
<!--//-->
<!--//    wrap.addEventListener('touchstart',function(event){-->
<!--//      var touch = event.changedTouches[0];-->
<!--//-->
<!--//      //清除定时器-->
<!--//      clearInterval(timer);-->
<!--//-->
<!--//      //清除过渡-->
<!--//      list.style.transition = 'none';-->
<!--//-->
<!--//      //无缝-->
<!--//      var left = transformCss(list,'translateX');-->
<!--//      var now = Math.round(-left / document.documentElement.clientWidth);-->
<!--//      if(now == 0){-->
<!--//        now = spanNodes.length;-->
<!--//      }else if(now == liNodes.length-1){-->
<!--//        now = spanNodes.length -1;-->
<!--//      };-->
<!--//      //切换动作-->
<!--//      transformCss(list,'translateX',-now*document.documentElement.clientWidth);-->
<!--//-->
<!--//      //读-->
<!--//      eleX = transformCss(list,'translateX');-->
<!--//      startX = touch.clientX;-->
<!--//-->
<!--//    });-->
<!--//    wrap.addEventListener('touchmove',function(event){-->
<!--//      var touch = event.changedTouches[0];-->
<!--//      //手指结束位置-->
<!--//      var endX = touch.clientX;-->
<!--//      //手指距离差-->
<!--//      var disX = endX - startX;-->
<!--//-->
<!--//      //写-->
<!--//      transformCss(list,'translateX',disX + eleX);-->
<!--//-->
<!--//    });-->
<!--//    wrap.addEventListener('touchend',function(event){-->
<!--//      var touch = event.changedTouches[0];-->
<!--//-->
<!--//      //定义图片索引下标-->
<!--//      var now = 0;-->
<!--//-->
<!--//      //读-->
<!--//      var left = transformCss(list,'translateX');-->
<!--//-->
<!--//      now = Math.round(-left / document.documentElement.clientWidth);-->
<!--//-->
<!--//      //范围限定-->
<!--//      if(now < 0){-->
<!--//        now = 0;-->
<!--//      }else if(now > liNodes.length-1){-->
<!--//        now = liNodes.length-1;-->
<!--//      };-->
<!--//-->
<!--//      //写-->
<!--//      //过渡-->
<!--//      list.style.transition = '1s';-->
<!--//      transformCss(list,'translateX',-now * document.documentElement.clientWidth);-->
<!--//-->
<!--//-->
<!--//      //处理小圆点-->
<!--//      for(var i=0;i<spanNodes.length;i++){-->
<!--//        spanNodes[i].className = '';-->
<!--//      };-->
<!--//      spanNodes[now%spanNodes.length].className = 'active';-->
<!--//-->
<!--//      //开启定时器-->
<!--//      auto();-->
<!--//    });-->
<!--//-->
<!--//-->
<!--//    //自动轮播-->
<!--//-->
<!--//    auto();-->
<!--//    function auto(){-->
<!--//      //清除定时器-->
<!--//      clearInterval(timer);-->
<!--//      timer = setInterval(function(){-->
<!--//        //无缝-->
<!--//        if(now == liNodes.length-1){-->
<!--//          now = spanNodes.length -1;-->
<!--//        };-->
<!--//        //切换动作-->
<!--//        //清除过渡-->
<!--//        list.style.transition = 'none';-->
<!--//        transformCss(list,'translateX',-now*document.documentElement.clientWidth);-->
<!--//-->
<!--//        setTimeout(function(){-->
<!--//          now++;-->
<!--//          list.style.transition = '0.5s';-->
<!--//          transformCss(list,'translateX',-now*document.documentElement.clientWidth);-->
<!--//          //处理小圆点-->
<!--//          for(var i=0;i<spanNodes.length;i++){-->
<!--//            spanNodes[i].className = '';-->
<!--//          };-->
<!--//          spanNodes[now%spanNodes.length].className = 'active';-->
<!--//        },20);-->
<!--//      },1000);-->
<!--//    };-->
<!--//-->
<!--//  };-->




<!--</script>-->

<!--<style lang="less" rel="stylesheet/less">-->
  <!--@import url("//unpkg.com/element-ui@2.0.3/lib/theme-chalk/index.css");-->
  <!--@rem:750/16rem;-->
  <!--//无缝滑屏-->

  <!--#banner_wrap{-->
    <!--position: relative;-->
    <!--height: 320/@rem;-->
    <!--width: 100%;-->
    <!--top: 92/@rem;-->
    <!--.el-carousel__item{-->
      <!--width: 100%;-->
      <!--height: 320/@rem;-->
    <!--}-->

    <!--.el-carousel__item:nth-child(2n) {-->
      <!--background-color: #99a9bf;-->
    <!--}-->

    <!--.el-carousel__item:nth-child(2n+1) {-->
      <!--background-color: #d3dce6;-->
    <!--}-->
    <!--img{-->
      <!--width: 100%;-->
      <!--height: 320/@rem;-->
    <!--}-->




  <!--}-->

<!--</style>-->


<template>
  <!--<div id="banner_wrap" ref="bannerWrap">-->
  <!--<ul class="banner_list">-->
  <!--<li><img src="../../assets/slide1.jpg"></li>-->
  <!--<li><img src="../../assets/slide2.jpg"></li>-->
  <!--<li><img src="../../assets/slide3.jpg"></li>-->
  <!--<li><img src="../../assets/slide4.jpg"></li>-->
  <!--</ul>-->
  <!--</div>-->
  <div id="banner_wrap">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="imgItem"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    component:{

    },
//    mounted(){
//      this.$nextTick(() => {
//        setTimeout(()=>{
//          this.scroll = new BScroll(this.$refs.bannerWrap, {
//            click:true,
//            scrollX:true,
//            momentum: true,
//            HWCompositing: true,
//            maxScrollX:375
//          })
//        },30)
//      })
//    }
  }


  //  window.onload = function(){
  //    banner();
  //  };
  //
  //
  //  //banner区域
  //  function banner(){
  //    //获取元素
  //    var wrap = document.getElementById('ban_wrap');
  //    var list = document.getElementById('ban_list');
  //    //动态添加li
  //    list.innerHTML += list.innerHTML;
  //    var liNodes = document.querySelectorAll('#ban_list li');
  //    var spanNodes = document.querySelectorAll('#ban_navs span');
  //
  //    //布局
  //    var styleN = document.createElement('style');
  //    styleN.innerHTML += '#ban_list{width: '+ liNodes.length +'00%;}';
  //    styleN.innerHTML += '#ban_list li{width: '+ (100/liNodes.length) +'%;}';
  //    styleN.innerHTML += '#ban_wrap{height: '+ liNodes[0].offsetHeight +'px;}';
  //    document.head.appendChild(styleN);
  //
  //    //横向滑屏
  //    //定义元素初始位置，手指初始位置
  //    var eleX = 0;
  //    var startX = 0;
  //
  //    //保存2d变换每一次的位移值
  ////			var translateX = 0;
  //
  //    //定时器
  //    var timer = 0;
  //    //模拟now
  //    var now = 0;
  //
  //    wrap.addEventListener('touchstart',function(event){
  //      var touch = event.changedTouches[0];
  //
  //      //清除定时器
  //      clearInterval(timer);
  //
  //      //清除过渡
  //      list.style.transition = 'none';
  //
  //      //无缝
  //      var left = transformCss(list,'translateX');
  //      var now = Math.round(-left / document.documentElement.clientWidth);
  //      if(now == 0){
  //        now = spanNodes.length;
  //      }else if(now == liNodes.length-1){
  //        now = spanNodes.length -1;
  //      };
  //      //切换动作
  //      transformCss(list,'translateX',-now*document.documentElement.clientWidth);
  //
  //      //读
  //      eleX = transformCss(list,'translateX');
  //      startX = touch.clientX;
  //
  //    });
  //    wrap.addEventListener('touchmove',function(event){
  //      var touch = event.changedTouches[0];
  //      //手指结束位置
  //      var endX = touch.clientX;
  //      //手指距离差
  //      var disX = endX - startX;
  //
  //      //写
  //      transformCss(list,'translateX',disX + eleX);
  //
  //    });
  //    wrap.addEventListener('touchend',function(event){
  //      var touch = event.changedTouches[0];
  //
  //      //定义图片索引下标
  //      var now = 0;
  //
  //      //读
  //      var left = transformCss(list,'translateX');
  //
  //      now = Math.round(-left / document.documentElement.clientWidth);
  //
  //      //范围限定
  //      if(now < 0){
  //        now = 0;
  //      }else if(now > liNodes.length-1){
  //        now = liNodes.length-1;
  //      };
  //
  //      //写
  //      //过渡
  //      list.style.transition = '1s';
  //      transformCss(list,'translateX',-now * document.documentElement.clientWidth);
  //
  //
  //      //处理小圆点
  //      for(var i=0;i<spanNodes.length;i++){
  //        spanNodes[i].className = '';
  //      };
  //      spanNodes[now%spanNodes.length].className = 'active';
  //
  //      //开启定时器
  //      auto();
  //    });
  //
  //
  //    //自动轮播
  //
  //    auto();
  //    function auto(){
  //      //清除定时器
  //      clearInterval(timer);
  //      timer = setInterval(function(){
  //        //无缝
  //        if(now == liNodes.length-1){
  //          now = spanNodes.length -1;
  //        };
  //        //切换动作
  //        //清除过渡
  //        list.style.transition = 'none';
  //        transformCss(list,'translateX',-now*document.documentElement.clientWidth);
  //
  //        setTimeout(function(){
  //          now++;
  //          list.style.transition = '0.5s';
  //          transformCss(list,'translateX',-now*document.documentElement.clientWidth);
  //          //处理小圆点
  //          for(var i=0;i<spanNodes.length;i++){
  //            spanNodes[i].className = '';
  //          };
  //          spanNodes[now%spanNodes.length].className = 'active';
  //        },20);
  //      },1000);
  //    };
  //
  //  };




</script>

<style lang="less" rel="stylesheet/less">
  @import url("//unpkg.com/element-ui@2.0.3/lib/theme-chalk/index.css");
  @rem:750/16rem;
  //无缝滑屏

  #banner_wrap{
    position: relative;
    height: 320/@rem;
    width: 100%;
    top: 92/@rem;
    .el-carousel__item{
      width: 100%;
      height: 320/@rem;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .imgItem{
      width: 100%;
      height: 320/@rem;

      &:nth-of-type(1){
        background: url("../../assets/slide1.jpg");
        background-size: 750/@rem 320/@rem;
      }
      &:nth-of-type(2){
        background: url("../../assets/slide2.jpg");
        background-size: 750/@rem 320/@rem;
      }
      &:nth-of-type(3){
        background: url("../../assets/slide3.jpg");
        background-size: 750/@rem 320/@rem;
      }
      &:nth-of-type(4){
        background: url("../../assets/slide4.jpg");
        background-size: 750/@rem 320/@rem;
      }
    }




  }

</style>


