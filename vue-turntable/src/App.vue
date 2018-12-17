<template>
  <div id="app">
    <template v-if="!err">
      <Header :logo="logo" />
      <Turntable :turntable="turntable"/>
      <Rule :rule="rule"/>
    </template>
    <div class="err" v-else><span v-text="err"></span></div>
  </div>
</template>

<script>
import axios from './assets/js/axios'
import Header from './components/Header'
import Turntable from './components/Turntable'
import Rule from './components/Rule'
const json = require('../api/api.turntable.js')

const CODE_SUCCESS = 100200

export default {
  name: 'App',
  components: {
    Header,
    Turntable,
    Rule
  },
  data () {
    return {
      apiUrl: {
        json: '/api/v1/activity/api'
      },
      err: '',
      logo: require('./assets/img/logo.png'),
      turntable: [],
      rule: '<ol><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">请说“开始抽奖”进行转盘抽奖，奖品奖券通过二维码进行领取；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">单个用户仅可领取一次；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">本次活动保留最终解释权。</span><br></li></ol>'
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getUrlParam (name) {
      const localSearch = window.location.search.substr(1).replace(/&amp;/g, '&')
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      let res = localSearch.match(reg)
      if (res) {
        return unescape(res[2])
      }
      return null
    },
    getData () {
      // 本地纯静态
      this.logo = json.logo
      this.rule = json.rule
      this.turntable = json.lottery
      return

      // 实际通过接口获取数据，本地也可借助 node 环境模拟接口
      const activityId = this.getUrlParam('activity_id')
      if (!activityId) {
        this.err = '链接地址参数错误'
        return
      }
      const params = {activity_id: activityId}
      axios.get(this.apiUrl.json, {params}).then((res) => {
        res = res.data
        if (res && res.code !== CODE_SUCCESS) {
          this.err = '获取数据失败，请重试'
          return
        }
        this.logo = res.data.logo
        this.rule = res.data.rule
        this.turntable = res.data.lottery

        // 设置文档title
        document.querySelector('title').innerText = res.data.title || ''
      }, () => {
        this.err = '获取数据失败，请重试'
      })
    }
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: #e74143;
  color: #fff;
  .err {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
}
</style>
