// pages/my/index.js
var app = getApp()
Page({
  data:{
    userInfo:{},
    list:[
      {
        list_item: [
          {
            name:"我的优势",
            url:"../resume/resume"
          }
        ]
      },
      {
        list_item: [
          {
            name:"工作经历",
            url:"../upload/upload"
          }
        ]
      },
      {
        list_item: [
          {
            name:"项目经验",
            url:"../upload/upload"
          }
        ]
      },
      {
        list_item: [
          {
            name:"教育经历",
            url:"../upload/upload"
          }
        ]
      },
    ]
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('load');
    app.getUserInfo((data) => {
      this.setData({
        userInfo:data,
      });
    })
  },
  goPage:function(event){
    wx.navigateTo({
      url:event.currentTarget.dataset.url
    })
  },
  onReady:function(){
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title:'我的'
    })
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
// if(userInfo.gender=='1'){
//   userInfo.gender=="女";
// }
// else if(userInfo.gender == '2'){
//   userInfo.gender=="男";
// }
// else{
//   userInfo.gender=="未知";
// }
