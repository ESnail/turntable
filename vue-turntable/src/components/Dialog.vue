<template>
  <div class="dialog-wrap">
    <transition name="tobig" mode="in-out">
      <div class="mask" v-show="dialog.show"></div>
    </transition>

    <transition name="tobig" mode="in-out">
      <div class="con" v-if="dialog.show">
        <h3 class="title">{{dialog.title}}</h3>
        <div class="main">
          <img class="img" :src="dialog.resultImg" alt=""/>
          <span class="text">{{dialog.resultText}}</span>
        </div>
        <a href="javascript:void(null);" class="btn">{{dialog.destoryTime}}s 返回页面</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Object,
      default () {
        return {
          show: false,
          title: '',
          resultImg: '',
          resultText: '',
          destoryTime: 15
        }
      }
    }
  },
  methods: {
    countDown () {
      let timer = setInterval(() => {
        this.dialog.destoryTime--
        if (this.dialog.destoryTime <= 0) {
          clearInterval(timer)
          this.dialog.show = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  $color-purple: #705af0;
  $color-white: #fbfafa;

  .dialog-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .7);
    }
    .tobig-enter-active {
      animation: bounce-in .8s;
    }
    .tobig-leave-active {
      animation: bounce-in .8s reverse;
    }
    .con {
      position: absolute;
      top: -200px;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 11;
      margin: auto;
      width: 600px;
      height: 550px;
      background: #fff;
      border-radius: 3px;
      text-align: center;
      color: $color-white;
      .title {
        height: 80px;
        color: $color-purple;
        font-size: 36px;
        font-weight: 700;
        line-height: 80px;
      }
      .main {
        width: 100%;
        height: 334px;
        background: url('../assets/img/dialog-bg.png') center center;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img {
          width: 250px;
          height: 250px;
          border-radius: 3px;
        }
        .text {
          margin: 10px;
          font-size: 24px;
          line-height: 30px;
        }
      }
      .btn {
        display: inline-block;
        margin: 25px auto;
        padding: 25px 35px;
        background-color: $color-purple;
        text-decoration: none;
        font-size: 24px;
        color: $color-white;
        border-radius: 3px;
      }
    }
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
