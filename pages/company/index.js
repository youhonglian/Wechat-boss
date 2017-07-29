// pages/company/index.js
Page({
  data:{
      job:[
        // {
        //   id:"1",
        //   work:"Java",
        //   salary: "20K-40K",
        //   place:"北京",
        //   expectYear:"1-3年",
        //   academy:"本科",
        //   company:"美团点评",
        //   url:"../jobinfo/jobinfo1"
        // },
        //
        // {
        //   id:"2",
        //   work:"嵌入式",
        //   salary: "20K-40K",
        //   place:"北京",
        //   expectYear:"经验不限",
        //   academy:"本科",
        //   company:"百度",
        //   url:"../jobinfo/jobinfo2"
        // },
        //
        // {
        //   id:"3",
        //   work:"Java",
        //   salary: "15K-30K",
        //   place:"北京",
        //   expectYear:"3-5年",
        //   academy:"本科",
        //   company:"京东",
        //   url:"../jobinfo/jobinfo3"
        // },
        // {
        //   id:"4",
        //   work:"Java",
        //   salary: "15K-30K",
        //   place:"北京",
        //   expectYear:"3-5年",
        //   academy:"本科",
        //   company:"京东",
        //   url:"../jobinfo/jobinfo3"
        // },
        // {
        //   id:"5",
        //   work:"Java",
        //   salary: "15K-30K",
        //   place:"北京",
        //   expectYear:"3-5年",
        //   academy:"本科",
        //   company:"京东",
        //   url:"../jobinfo/jobinfo3"
        // },
        // {
        //   id:"6",
        //   work:"Java",
        //   salary: "15K-30K",
        //   place:"北京",
        //   expectYear:"3-5年",
        //   academy:"本科",
        //   company:"京东",
        //   url:"../jobinfo/jobinfo3"
        // }
      ]
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url:'http://www.easy-mock.com/mock/59115bcff926ef14e26afc82/test/list/company/list',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res => {
        console.log(res.data.data);
        this.setData({
          job:res.data.data
        })
      })
    })
    // console.log(options);
  },
  clickjob:function(res){
    var id = res.currentTarget.id;
    wx.navigateTo({
      url:'../jobinfo/jobinfo?id=' + id
    })

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
