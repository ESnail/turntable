import axios from 'axios'
import qs from 'qs'

// 超时设置
axios.create({
  timeout: 10000
})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify({...config.data})
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
