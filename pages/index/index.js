//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎您！',
    motto_e: 'Welcome！',
    userInfo: {},
    hasUserInfo: false,
    check_no:null
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  getUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  useCalc: function (e) {
    var check_no = e.detail.value.check_no 
    if (check_no == "may968968"){
      wx.navigateTo({
        url: '../caredailycalc/caredailycalc'
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '密码不正确，请重新输入',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
    }
  }
})