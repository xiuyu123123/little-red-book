import env from '@/config/env'
import { getCommonParams } from '@/config/commonParams'
import { isH5, isDevelopment } from './platform'
import { forward } from './router'

let loadingCount = 0

function showLoading(isLoading) {
  if (isLoading) {
    uni.showLoading({
      title: '加载中',
    })
    loadingCount = loadingCount + 1
  }
}

function hideLoading() {
  loadingCount = loadingCount - 1
  if (loadingCount === 0) {
    uni.hideLoading()
  }
}

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '抢购火爆，稍候片刻！', errno = -1 } = err
  switch (errno) {
    case 10000:
      // 特殊异常处理
      forward('login')
      break

    default:
      uni.showToast({
        title: errmsg,
      })
      break
  }
}

// h5环境开启代理
const apiBaseUrl = isH5 && isDevelopment ? '/api' : env.apiBaseUrl

function baseRequest(method: RequestOptionsMethod, url: string, data: any) {
  console.log(method, url, data)
  return new Promise((resolve) => {
    showLoading(data.isLoading)
    delete data.isLoading
    let responseDate
    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 20000,
      header: {
        'content-type':
          method === 'GET'
            ? 'application/json; charset=utf-8'
            : 'application/x-www-form-urlencoded',
      },
      data,
      success: (res: any) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          if (res.data.errno === 0) {
            responseDate = res.data
          } else {
            reject(res.data)
          }
        } else {
          reject({
            errno: -1,
            errmsg: '抢购火爆，稍候片刻！',
          })
        }
      },
      fail: (err) => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~',
        })
      },
      complete: (data) => {
        console.log(data, 'data')
        resolve(responseDate)
        hideLoading()
      },
    })
  })
}

type Methods = 'get' | 'post'
type RequestOptionsMethod = 'GET' | 'POST'

const http: { [key in Methods]: Function } = {
  get: (api, params) => baseRequest('GET', api, { ...getCommonParams(), ...params }),
  post: (api, params) => baseRequest('POST', api, { ...getCommonParams(), ...params }),
}

export default http