var app = getApp()
Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  formSubmit:function(e){
    console.log(e.detail.value);
    var resume = e.detail.value;
    app.globalData.userInfo = {resume:resume};
  },
  save:function(e){
    wx.navigateBack()
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
