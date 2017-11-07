<template>
  <div>
    <div class="advertise-site-wrap">
      <div class="advertise-site1">
        <ul class="advertise-list">
          <li class="item">
            <img src="../../assets/advertiseSite1.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite2.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite3.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite4.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite5.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite6.png"/>
          </li>
        </ul>
      </div>
      <div class="advertise-site2">
        <img src="../../assets/advertiseSite9.png"/>
      </div>
      <div class="advertise-site3">
        <div class="item1">
          <img src="../../assets/advertiseSite7.png"/>
        </div>
        <div class="item2">
          <img src="../../assets/advertiseSite8.png"/>
        </div>
      </div>
    </div>
    <div class="advertise-site-wrap">
      <div class="advertise-site1">
        <ul class="advertise-list">
          <li class="item">
            <img src="../../assets/advertiseSite1.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite2.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite3.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite4.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite5.png"/>
          </li>
          <li class="item">
            <img src="../../assets/advertiseSite6.png"/>
          </li>
        </ul>
      </div>
      <div class="advertise-site2">
        <img src="../../assets/advertiseSite9.png"/>
      </div>
      <div class="advertise-site3">
        <div class="item1">
          <img src="../../assets/advertiseSite7.png"/>
        </div>
        <div class="item2">
          <img src="../../assets/advertiseSite8.png"/>
        </div>
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
  .advertise-site-wrap{
    width: 100%;
    height: 586/@rem;
    background: rgb(242,72,101);
    .advertise-site1{
      position: relative;
      top: 18/@rem;
      .advertise-list{
        width: 576/@rem;
        height: 408/@rem;
        .item{
          padding-left: 4/@rem;
          margin-top: -8  /@rem;
          width: 180/@rem;
          height: 214/@rem;
          float: left;
          img{
            width: 178/@rem;
            height: 200/@rem;
          }
        }
      }
    }
    .advertise-site2{
      position: relative;
      top: -398/@rem;
      left: 6/@rem;
      img{
        width: 186/@rem;
        height: 406/@rem;
      }
    }
    .advertise-site3{
      width: 100%;
      height: 161/@rem;
      position: relative;
      top: -396/@rem;
      .item1{
        position: absolute;
        left: 4/@rem;
        img{
          width: 366/@rem;
          height: 140/@rem;
        }
      }
      .item2{
        position: absolute;
        left: 378/@rem;
        img{
          width: 366/@rem;
          height: 140/@rem;
        }
      }
    }
  }

</style>


