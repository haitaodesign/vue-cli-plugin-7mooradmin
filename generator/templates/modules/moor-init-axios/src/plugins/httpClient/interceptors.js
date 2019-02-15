import Axios from 'axios'

const service = Axios.create({
  baseURL: '/v1/'
})

service.interceptors.response.use(
  config => {
    // 根据返回状态码定制一套提示方案
    return config.data
  },
  error => {
    if (error.response) {
    }
    return Promise.reject(error.response.data)
  }
)

export default service
