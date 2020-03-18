const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 封装ajax请求方法，加入header，loading效果
 * url 请求地址的uri
 * data 请求数据
 * method 请求数据类型，默认GET请求
 * success 成功回调函数
 * fail 失败回调函数 
 */
const myAjax = (url, data, method, success, fail, loading = true) => {
  const host = 'http://192.168.0.103:7001'
  if (loading) {
    wx.showLoading({
      title: '正在加载中...',
    });
  }
  let _this = this;
  wx.request({
    url: host + url,
    data: data,
    method: method || 'GET',
    header: {
      'Authorization': 'Bearer ' + (wx.getStorageSync('token') || '')
    },
    success: (res) => {
      if (res.statusCode == 200) {
        if (typeof success == 'function') {
          success(res.data);
        }
      } else if (res.statusCode == 401) {
        wx.showModal({
          title: '错误提示',
          content: '当前您还未登录，请先登录',
          success: res => {
            if (res.confirm) {
              wx.switchTab({
                url: '../user/index',
              })
            }
          }
        })
      } else {
        if (typeof fail == 'function') {
          fail();
        }
      }
    },
    fail: res => {

    },
    complete: () => {
      wx.hideLoading();
    }
  })
}


module.exports = {
  formatTime: formatTime,
  myAjax: myAjax
}
