//app.js
// const WebSocketServer = require('websocket').server;
// const http = require('http');
//
// let httpServer = http.createServer((req,res) => {
//   console.log('[' +(new Date()) +'] Received request for ' + req.url);
//   res.writeHead(404);
//   res.end();
// });
//
// var wsServer = new WebSocketServer({
//   httpServer:httpServer,
//   autoAcceptConnection:true
// });
//
// wsServer.on('connect',(connection) => {
//   connection.on('message',(message) => {
//     console.log(">> message",message);
//
//   });
//   connection.on('close',(reasonCode,description) => {
//     consoel.log('['+(new Date()) +'] Peer' + connection.remoteAddress + 'disconnected');
//   })
// });
//
// httpServer.listen(3000, () =>{
//     console.log('['+(new Date()) +'] Server is Listening on port 3000');
// })



App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  onPullDownRefresh: function() {
    console.log('刷新');
    wx.stopPullDownRefresh;
  }
})
