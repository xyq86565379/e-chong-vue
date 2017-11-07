<template>
  <div id="classifyWrap">
    <div class="classify">
      <div class="classify-wrap">
        <div class="head">
          <img src="../../assets/classify3.png"/>
          <span class="title">进口直邮</span>
        </div>
        <div class="content">
          <ul class="list">
            <li v-for="impo in appContent.imports">
              <img v-if="impo.proUrl" :src="impo.proUrl"/>
              <span class="good-name" v-if="impo.proName">{{impo.proName}}</span>
              <div class="price">
                <div class="now-price">
                  <span>¥</span>
                  <span v-if="impo.price">{{impo.price}}</span>
                </div>
                <div class="old-price">
                  <span>¥</span>
                  <span v-if="impo.oldPrice">{{impo.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="classify-wrap">
        <div class="head">
          <img src="../../assets/classify5.png"/>
          <span class="title">主粮</span>
        </div>
        <div class="content">
          <ul class="list">
            <li v-for="grain in appContent.grains">
              <img v-if="grain.proUrl" :src="grain.proUrl"/>
              <span class="good-name" v-if="grain.proName">{{grain.proName}}</span>
              <div class="price">
                <div class="now-price">
                  <span>¥</span>
                  <span v-if="grain.price">{{grain.price}}</span>
                </div>
                <div class="old-price">
                  <span>¥</span>
                  <span v-if="grain.oldPrice">{{grain.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="classify-wrap">
        <div class="head">
          <img src="../../assets/classify4.png"/>
          <span class="title">零食</span>
        </div>
        <div class="content">
          <ul class="list">
            <li v-for="chocolate in appContent.chocolates">
              <img v-if="chocolate.proUrl" :src="chocolate.proUrl"/>
              <span class="good-name" v-if="chocolate.proName">{{chocolate.proName}}</span>
              <div class="price">
                <div class="now-price">
                  <span>¥</span>
                  <span v-if="chocolate.price">{{chocolate.price}}</span>
                </div>
                <div class="old-price">
                  <span>¥</span>
                  <span v-if="chocolate.oldPrice">{{chocolate.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="classify-wrap">
        <div class="head">
          <img src="../../assets/classify2.png"/>
          <span class="title">医疗保健</span>
        </div>
        <div class="content">
          <ul class="list">
            <li v-for="treatment in appContent.treatments">
              <img v-if="treatment.proUrl" :src="treatment.proUrl"/>
              <span class="good-name" v-if="treatment.proName">{{treatment.proName}}</span>
              <div class="price">
                <div class="now-price">
                  <span>¥</span>
                  <span v-if="treatment.price">{{treatment.price}}</span>
                </div>
                <div class="old-price">
                  <span>¥</span>
                  <span v-if="treatment.oldPrice">{{treatment.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="classify-wrap">
        <div class="head">
          <img src="../../assets/classify1.png"/>
          <span class="title">生活馆</span>
        </div>
        <div class="content">
          <ul class="list">
            <li v-for="livingHouse in appContent.livingHouses">
              <img v-if="livingHouse.proUrl" :src="livingHouse.proUrl"/>
              <span class="good-name" v-if="livingHouse.proName">{{livingHouse.proName}}</span>
              <div class="price">
                <div class="now-price">
                  <span>¥</span>
                  <span v-if="livingHouse.price">{{livingHouse.price}}</span>
                </div>
                <div class="old-price">
                  <span>¥</span>
                  <span v-if="livingHouse.oldPrice">{{livingHouse.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
  export default {
    props:{
      appContent:Object
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:750/16rem;
  .classify{
    position: relative;
    width: 100%;
    height: 607/@rem;
    background: rgb(241,71,102);
    .classify-wrap{
      padding: 0 4/@rem;
      width: 740/@rem;
      .head{
        width: 100%;
        height: 80/@rem;
        img{
          width: 100%;
          height: 80/@rem;
          display: inline-block;
        }
        .title{
          position: absolute;
          top: 28/@rem;
          left: 38/@rem;
          display: inline-block;
          font-weight: bold;
          font-size: 32/@rem !important;
        }
      }
      .content{
        background: white;
        .list{
          width: 100%;
          height: 508/@rem;
          li{
            height: 248/@rem;
            width: 182/@rem;
            float: left;
            border-right: 2/@rem solid rgb(237,237,237);
            text-align: center;
            img{
              width: 130/@rem;
              height: 145/@rem;
            }
            &:nth-of-type(1){
              border-bottom: 2/@rem solid rgb(237,237,237);
            }
            &:nth-of-type(2){
              border-bottom: 2/@rem solid rgb(237,237,237);
            }
            &:nth-of-type(3){
              border-bottom: 2/@rem solid rgb(237,237,237);
            }
            &:nth-of-type(4){
              border-bottom: 2/@rem solid rgb(237,237,237);
              border-right: 0;
            }
            &:nth-of-type(8){
              border-bottom: 2/@rem solid rgb(237,237,237);
              border-right: 0;
            }
            .good-name{
              font-size: 12px;
              color: rgb(130,130,130);
              position: relative;
              width: 100%;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price{

              position: relative;
              margin-top: 20/@rem;
              .now-price{
                color: red;
                position: absolute;
                left: 2%;
                font-size: 26/@rem;
                span{
                  &:nth-of-type(2){

                  }
                }
              }
              .old-price{
                position: relative;
                color: rgb(130,130,130);
                left: 26%;
                font-size: 24/@rem;
                top: 2/@rem;
                span{
                  &:nth-of-type(2){

                  }
                }
              }
            }
          }

        }
      }
    }

  }

</style>


