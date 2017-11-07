<template>
  <div class="purchase">
    <div class="item1">
      <img src="../../assets/purchase1.jpg">
    </div>
    <div class="item2">
      <img src="../../assets/purchase2.jpg">
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .purchase{
    width: 100%;
    height: 402/@rem;
    position: relative;
    top: 38/@rem;
    font-size: 0;
    .item1{
      width: 100%;
      img{
        width: 100%;
        height: 100/@rem;
      }
    }
    .item2{
      width: 100%;
      img{
        width: 750/@rem;
        height: 302/@rem;
      }
    }
  }

</style>


