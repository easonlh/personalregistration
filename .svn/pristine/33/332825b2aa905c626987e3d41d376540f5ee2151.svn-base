//app.js
App({
  version:'v0.0.1',
  onLaunch: function () {
    //获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.systemInfo = res
        const iphoneX = /iphone x/i.test(res.model);
        const iphoneNew = /iPhone11/i.test(res.model) && res.screenHeight === 812;
        this.isIPhoneX = iphoneX || iphoneNew
        this.homePageHeight = res.screenHeight - (this.isIPhoneX ? 84 : 50) - 44 - res.statusBarHeight;
      },
    })
    var _this = this;
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    this.globalData = {}
  },
  systemInfo:null,
  isIPhoneX:false,
  homePageHeight:0,
})
