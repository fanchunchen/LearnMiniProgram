App({
  onLaunch() {
    console.log(1);

  },
  onShow() { },
  onHide() { },
  onError() { 
    setTimeout((err)=>{throw err},2000)
  },
  globalData:{name:'fanchunchen',age:31}

})