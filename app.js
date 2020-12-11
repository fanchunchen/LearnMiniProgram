


// App({
//   globalData: { 'token': '' },
//   data: {},
//   login() {
//     console.log('执行了登录操作')
//     wx.login({
//       timeout: 2000,
//       success: (res) => {
//         console.log(res);
//         const code = res.code;
//         wx.request({
//           url: 'http://123.207.32.32:3000/login',
//           method: 'post',
//           data: {
//             code
//           },
//           success: (res) => {
//             console.log(res)
//             const token = res.data.token
//             this.globalData.token = token;
//             // console.log(this.globalData.token);
//             wx.setStorageSync('token', token)
//           }
//         })
//       }
//     })
//   },
//   check_token(token) {
//     console.log('执行了验证token操作')
//     wx.request({
//       url: 'http://123.207.32.32:3000/auth',
//       method: 'post',

//       header: { token },
//       success: (res) => { console.log(res) },
//       fail: (err) => { console.log(err) }

//     })

//   },
//   onLaunch() {
//     const token = wx.getStorageSync('token')
//     if (token && token.length !== 0) {
//       this.check_token(token)
//     } else { this.login() }


//   }

// })
App({
  globalData: { 'token': '' },
  onLaunch() {
    const token = wx.getStorageSync('token')
    if (token && token.length !== 0) {

      this.check_token(token)
    } else { this.login() }



  },
  login() {
    console.log('执行了登录操作')
    wx.login({
      timeout: 2000,
      success: res => {
        // console.log(res);
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data:{code},
          success: res => {
            // console.log(res)
            const token = res.data.token
            this.globalData.token = token
            // console.log(this.globalData.token)
            wx.setStorageSync('token', token)
          }
        })
      }

    })
  },
  check_token(token) {
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: { token },
      success: (res) => { console.log(res) },
      fail: (err) => { console.log(err) }
    })


  }


})