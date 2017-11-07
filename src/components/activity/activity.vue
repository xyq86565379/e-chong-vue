<template>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2017-11/02/09/2ffa23a2d9a9c51b76c45521485f4593.jpg@!water">
        </a>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style  lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .swiper-wrapper{
    position: relative;
    .swiper-slide{
      width: 100%;
      height: 100/@rem;
      position: absolute;
      top: -8/@rem;
      a{
        img{
          width: 100%;
          height: 100/@rem;
        }
      }
    }
  }
</style>


