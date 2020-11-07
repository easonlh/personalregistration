// pages/candidate/candidate.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'baseinfo',
    tabbar: [{
        descr: "基本信息",
        name: "baseinfo",
        iconPath: "home-o",
        tips: "",
        selected: true
      },
      {
        descr: "家庭成员",
        name: "family",
        iconPath: "cluster-o",
        tips: "",
        selected: false
      },
      {
        descr: "工作教育",
        name: "workeducation",
        iconPath: "friends-o",
        tips: "",
        selected: false
      },
      {
        descr: "必传附件",
        name: "attachment",
        iconPath: "upgrade",
        tips: "",
        selected: false
      }
    ],
    tabbarHeight: app.isIPhoneX ? 84 : 50, // 底部tabbar高度
    activeIndex: 0, // 选中的tab
    scrollTopArray: [] // 记录每个页面的滚动位置
  },
  onChange(event) {
    if (event.detail == this.data.activeIndex) return;
    this.updateSubPageShowHide(event.detail);
    this.setData({
      activeIndex: event.detail,
      pageName: this.data.tabbar[event.detail].descr
    })
    console.log(this.data.active)
  },
  //还原自页面的滚动位置
  onPageScroll(e) {
    this.data.scrollTopArray[this.data.activeIndex] = e.scrollTop;
  },
  //更新组件的show hide 生命周期
  updateSubPageShowHide(currentIndex) {
    this.data.tabbar.forEach(function (value, i) {
      if (i == currentIndex) {
        value.selected = true;
        wx.setNavigationBarTitle({
          title: value.descr,
        })
      } else {
        value.selected = false;
      }
    })
    this.setData({
      tabbar: this.data.tabbar,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.tabbar.forEach((item, index, arr) => {
      this.data.scrollTopArray[index] = 0;
    });
    wx.setNavigationBarTitle({
      title: this.data.tabbar[0].descr,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.updateSubPageShowHide(this.data.activeIndex);

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})