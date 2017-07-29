var app = getApp()
Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    // var Ul = document.getElementsById('chat-list')
    // console.log(Ul) 
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo

         
      })
    })
  },
  formSubmit: function(e) {
     console.log('form发生了submit事件，携带数据为：', e.detail.value.input)
     
    //  var context = e.detail.input
    //  var avatar = userInfo.avatarUrl
    //  var ulHtml = `<li>
    //  <span class="chat-context">${context}</span>
    //  <image class="userinfo-avatar"src="${avatar}" alt=""></image>
    //  </li>`
    //  Ul.innerHTML+=ulHtml;

    
  //    wx.connectSocket({
  //      url: 'wx://localhost:3000',
  //      data:{
  //        x: '',
  //        y: ''
  //      },
  //      header:{
  //        'content-type': 'application/json'
  //      },
  //      method:"GET"
  //  })
  //      wx.onSocketOpen(function(res){
  //         console.log('WebSocket连接已打开！')
  //       })
  //    wx.onSocketMessage(function(msg){
  //      console.log(msg);
  //    })

  //    wx.onSocketClose(function(res){
  //      console.log('WebSocket连接已关闭')
  //    })


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
