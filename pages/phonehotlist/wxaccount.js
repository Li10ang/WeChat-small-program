var common = require('fenlei.js')
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
    list:[],
    time: GetDateStr(-1),
    firstname:"微指数",
    bottomOne: "Copyright @2015 北京微指数科技有限公司",
    array: ['总榜', '新闻', '娱乐', '搞笑', '旅游', '美食', '财经', '健康', '管理', '情感', '政务', '丽人', '汽车', '楼市', '时尚', '科技', '游戏', '文史', '名人', '影音', '动漫', '企业', '本地', '摄影', '亲子', '生活', '两性', '热门'],
    index: 0,
    type_name: '',
    // 提示框
    modalHidden: true,
    // 加载中
    hidden: false
  },
  onLoad: function (options) {
    var type = options.type;
    // 进入页面的时候取数据
    var that = this
    wx.request({
      url: 'http://release.weizhishu.com/wxlittlepro/'+type+'api',
      data: {cid:'0'},
      success: function (res) {
         that.setData({
           hidden: true,
           list: that.data.list.concat(res.data.data),
           type_name: type
         })
      }
    })
    this.index = 1
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
  choose: function(){

  },
  bindPickerChange: function(e) {
    //选择榜单类型
    var that = this;
    var type = that.data.type_name
    var cid = e.detail.value    
    this.setData({
      hidden: false,
      index: e.detail.value,
      list: that.data.list.concat()    
    });
    that.setData({ loading: true })
    wx.request({
      url: 'http://release.weizhishu.com/wxlittlepro/'+type+'api',
      data: {cid: cid},
      success: function (res) {
         that.setData({
           hidden: true,
           loading: false,
           list: (res.data.data),
         })
      },
      fail: function(){
        // 错误的时候弹出
        that.setData({
          modalHidden: false
        })
      },
      complete: function(){

      }
    })

  },
   modalChange2: function(e) {
    this.setData({
      modalHidden: true
    })       
  }
})