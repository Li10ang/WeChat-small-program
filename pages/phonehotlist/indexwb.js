function GetDateStr(AddDayCount) { 
  var dd = new Date(); 
  dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
  var y = dd.getFullYear(); 
  var m = dd.getMonth()+1;//获取当前月份的日期 
  var d = dd.getDate(); 
  return y+"-"+m+"-"+d; 
} 
Page({
  data:{
    // text:"这是一个页面"
    time: GetDateStr(-1),
    name:'冷兔',
    type_name_left: "订阅号",
    type_name_right: "微博号",
    list: [],
    article: []
  },
  onLoad:function(options){
    // 获取到页面的wid
    // console.log(options)
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.request({
      url: 'http://www.weizhishu.com/phonehotlist/indexwbapi?wid='+options.wid,
      success: function (res) {
         that.setData({
           list: res.data.data.wbinfo,
           article: res.data.data.article
         })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    // wx.setNavigationBarTitle({
    //   title: ''
    // })
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