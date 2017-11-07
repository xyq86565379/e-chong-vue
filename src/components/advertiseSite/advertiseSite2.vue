<template>
  <div>
    <div class="advertise2-list-wrap">
      <ul class="list">
        <li class="item">
          <a href="#">
            <img src="../../assets/banner1.png"/>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/banner2.png"/>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/banner3.png"/>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/banner4.png"/>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/banner5.png"/>
          </a>
        </li>
        <li class="item">
          <a href="#">
            <img src="../../assets/banner6.png"/>
          </a>
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
  .advertise2-list-wrap{
    width: 100%;
    height: 614/@rem;
    background: rgb(242,72,101);
    .list{
      padding-top: 10/@rem;
      .item{
        float: left;
        padding-left: 4/@rem;
        a{
          img{
            width:369/@rem;
            height: 190/@rem;
          }
        }
      }
    }
  }

</style>


