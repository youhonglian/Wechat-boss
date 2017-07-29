var app = getApp()
Page({
  data:{
    //  info:[],
    id:'',
    work:'',
    salary:'',
    detailjob:'',
    skilljob:'',
    address:'',
    bossavatar:'',
    bossname:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var id = options.id;
    // console.log(id);
    var url =
    wx.request({
      url:'http://www.easy-mock.com/mock/59115bcff926ef14e26afc82/test/list/jobInfo/list',
      data:{},
      method:'GET',
      header:'Content-type:application/json',
      success:(res) => {
        // console.log(res.data.data);
      var info = res.data.data;
      console.log(info[id].id)
      // var jobInfoId = res.data.data
      // var boss= .boss;
        this.setData({
          id:info[id].id,
          work:info[id].work,
          salary:info[id].salary,
          detailjob:info[id].detailjob,
          skilljob:info[id].skilljob,
          address:info[id].address,
          bossavatar:info[id].boss.avatar,
          bossname:info[id].boss.name
        })
        console.log(info[id]);
        // console.log(bossname);
      }
    })
  },
  concactBoss:function(e){
    console.log('立即联系');
    wx.redirectTo({
      // url:e.currentTarget.dataset.url
      url:'../concact/concact',
    });

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
