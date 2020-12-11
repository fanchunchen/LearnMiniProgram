// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast() {

    wx.showToast({
      title: '标题',
      icon: 'success',
      duration: 1500
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '标题1',
      content: '内容',
      confirmColor: '#ccc',
      confirmText: '应用',
      cancelColor: '#bfa',
      success(res) {
        // console.log(res);
        if (res.cancel) { console.log('用户点击了取消'); }
        if (res.confirm) { console.log('用户点击了确定'); }
      }
    })
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      // alertText:'警告',
      success(res) { console.log(res) }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中',
      success() {
        setTimeout(() => {
          wx.hideLoading({
            success: (res) => { },
          })
        }, 1000)
      }
    })

  },

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
return {
  title:'你好啊,李银河',
  path:'/pages/about/about',
  imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'


}
  }
})