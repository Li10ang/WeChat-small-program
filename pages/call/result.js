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
    name:'',
    type_name_left: "订阅号",
    type_name_right: "微博号",
    list: [],
    article: [],
    result: ''
  },
  onLoad:function(options){
    // 获取到页面的wid
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    var type = options.type
    var id = options.wid
    var info
    if( type == 'wx' ){
          wx.request({
            url: 'http://release.weizhishu.com/wxlittlepro/wxvalue?wid='+id,
            success: function (res) {
                that.setData({
                list: res.data.data,
                result: 'wx'
                })
            }
            })
      }else{
          wx.request({
            url: 'http://release.weizhishu.com/wxlittlepro/wbvalue?wid='+id,
            success: function (res) {
                that.setData({
                list: res.data.data,
                result: 'wb'
                })
            }
            })
      }
    
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