<template>
  <div class="header-wrap">
   <img class="logo" v-show="logo" :src="logo" alt="logo" />
   <div class="title"></div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      logoImg: require('../assets/img/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background: url('../assets/img/header-bg.png') no-repeat 100% 100%;
    background-size: cover;
    .logo {
      position: absolute;
      top: 20px;
      right: 40px;
      display: block;
      width: 190px;
      height: 95px;
    }
    .title {
      margin: 0 auto;
      width: 800px;
      height: 100%;
      background: url('../assets/img/header-title.png') no-repeat 100% 100%;
      background-size: cover;
    }
  }
</style>
