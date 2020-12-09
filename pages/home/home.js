// miniprogram/pages/home/home.js
const app = getApp()
console.log(app.globalData.name);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "fanchunchen",
    stu: [{ name: 'kobe', age: 18, height: 1.88 },
    { name: 'james', age: 19, height: 1.98 },
    { name: 'maidi', age: 20, height: 1.85 }],
    counter: 0,
    list: []
  },
  addClick() {
    // console.log(1);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  subClick() {
    // console.log(1);
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleBtnClick(e) {
    console.log(e);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success: (res) => {
        // console.log(res)
        this.setData({
          list: res.data.data.list

        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
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