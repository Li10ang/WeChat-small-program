Page({
  data:{
    // text:"这是一个页面"
    keyword: '',
    array:['最新','一周最热'],
    index: 0,
    list: [],
    arti: [],
    hidden: false,
    wtype: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'http://release.weizhishu.com/phonesearch/details'+options.wtype+'api?keyword='+options.keyword,
      success: function (res) {
         that.setData({
            keyword: options.keyword,
            list: res.data.data,
            arti: res.data.data.article,
            wtype: options.wtype,
            hidden: true
        })
      }
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
  },
  bindPickerChange: function(e){
    // 最新0 2／一周热门1 
    var type = e.detail.value;
    if(e.detail.value == 0){type = 2}
    wx.request({
      url: 'http://release.weizhishu.com/phonesearch/detailswxapi',
    //   data: {keyword: keyword, time: type},
      success: function (res) {
        
      }
    })
    this.setData({
    //    hidden: false,
      index: e.detail.value
    })
  }
})