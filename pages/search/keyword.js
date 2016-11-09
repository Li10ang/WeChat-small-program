var inputContent = {}
Page({
  data:{
      activewx: "active", 
      list: [],   
      result: "loading",
      active: 'wx',
      hidden: true,
      keyword: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  wxcheck:function(){
    var that = this;
    that.setData({
      activewx: "active",   
      activewb: "",
      active: "wx"
    })
  },
  wbcheck:function(){
    var that = this;
    that.setData({
      activewx: "",   
      activewb: "active",
      active: "wb"
    })
  },
  bindChange: function(e) {
        this.setData({
          keyword: e.detail.value
        })
  },
  searchwx:function(e){
    // 搜索
    // this.setData({
    //   hidden: false
    // })
    // var that = this;
    // var inputValue = inputContent[e.currentTarget.id]
    // wx.request({
    //   url: 'https://release.weizhishu.com/wxlittlepro/searchwxapi',
    //   data: {keyword: inputValue },
    //   success: function (res) {
    //     console.log(res);
    //      that.setData({
    //        result: 'wx',
    //        list: res.data.data,
    //        hidden: true
    //      })
    //   }
    // })

    
  },
  searchwb:function(e){
    // 搜索
    // this.setData({
    //   hidden: false
    // })
    // var that = this;
    // var inputValue = inputContent[e.currentTarget.id]
    // wx.request({
    //   url: 'https://release.weizhishu.com/wxlittlepro/searchwbapi',
    //   data: {keyword: inputValue },
    //   success: function (res) {
    //     console.log(res);
    //      that.setData({
    //        result: 'wb',
    //        list: res.data.data,
    //        hidden: true
    //      })
    //   }
    // })
  }
})