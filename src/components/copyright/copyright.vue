<template>
  <div>
    <div class="copyright">
      <div class="about-us">
        <span class="bt" title="触屏版">触屏版</span>
        <span><a href="#">手机客户端</a></span>
        <span><a href="#">关于我们</a></span>
        <span><a href="#">联系我们</a></span>
      </div>
      <div class="statement">
        © wap.epet.com 版权：重庆易宠科技有限公司
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .copyright{
    text-align: center;
    margin-bottom: 170/@rem;
    .about-us{
      padding-top: 40/@rem;
      span{
        font-size: 28/@rem;
        a{
          color: black;
        }
      }
      .bt{
        color: red;
      }
    }
    .statement{
      font-size: 24/@rem;
      padding-top: 20/@rem;
    }
  }

</style>


