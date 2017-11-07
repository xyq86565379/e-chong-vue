<template>
  <div>
    <div class="footer">
      <ul class="footer-menu-list">
        <li class="menu">
          <a href="#" class="db"></a>
        </li>
        <li class="menu">
          <a href="#" class="db"></a>
        </li>
        <li class="menu">
          <a href="#" class="db"></a>
        </li>
        <li class="menu">
          <a href="#" class="db"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .footer{
    height: 109/@rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 2/@rem solid #ddd;
    background: white;
    padding-left: 44/@rem;
    .menu{
      height: 109/@rem;
      width: 25%;
      float: left;
      text-align: center;

      &:nth-of-type(1){
        background: url("../../assets/menu1.png") no-repeat;
        background-position: 0 6/@rem;
        background-size: 90/@rem 406/@rem;
      }
      &:nth-of-type(2){
        background: url("../../assets/menu2.png") no-repeat ;
        background-position: 0 -100/@rem;
        background-size: 90/@rem 406/@rem;
      }
      &:nth-of-type(3){
        background: url("../../assets/menu2.png") no-repeat ;
        background-position: 0 -200/@rem;
        background-size: 90/@rem 406/@rem;
      }
      &:nth-of-type(4){
        background: url("../../assets/menu2.png") no-repeat ;
        background-position: 0 -304/@rem;
        background-size: 90/@rem 406/@rem;
      }


    }
  }

</style>


