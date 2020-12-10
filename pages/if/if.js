// pages/if/if.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    time: new Date().toLocaleString(),
    age:18,
    score:45
  },
  btnClick() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  scoreIncrement(){
    this.setData({
      score:this.data.score+10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    setInterval((

    ) => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {this.setData

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