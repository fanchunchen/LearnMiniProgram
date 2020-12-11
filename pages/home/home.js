// miniprogram/pages/home/home.js
import request from '../../service/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/recommend',
    //   success: function (res) { console.log(res); }
    // }),
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/home/data?type=sell&page=1',
    //   success:function(res){console.log(res)}
    // })
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/',
    //   data: {
    //     type: "sell",
    //     page: 1
    //   },
    //   success: function (res) { console.log(res) }
    // })
    request({
      url: 'http://152.136.185.210:8000/api/w6/home/data',
      data:{type:"sell",page:1}

    }).then(res => { console.log(res); }).catch(err => console.log(err))
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