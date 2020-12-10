// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log('----');
  },
  handleItemClick(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index
    const item = e.currentTarget.dataset.item
    console.log(index, item);
  },
  handleLongpress() { console.log('longpress'); },
  handleTouchStart() { console.log('touchstart'); },
  handleTouchEnd() { console.log('touchend'); },
  handleTouchMove() { console.log('touchmove'); },
  handleTap() { console.log('tap'); },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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