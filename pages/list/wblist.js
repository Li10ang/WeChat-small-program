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
    firstname:"微指数",
    staffA: {firstName: '微指数榜', typename: 'wzs', title1: '' ,title2: '' , title3: '', bg: ''},
    staffB: {firstName: '传播榜', typename: 'cb', title1: '' ,title2: '' , title3: '', bg: ''},
    staffC: {firstName: '估值榜', typename: 'gz', title1: '' ,title2: '' , title3: '', bg: ''},
    staffD: {firstName: '质量榜', typename: 'zl', title1: '' ,title2: '' , title3: '', bg: ''},
    staffE: {firstName: '活跃榜', typename: 'hy', title1: '' ,title2: '' , title3: '', bg: ''},
    staffF: {firstName: '爆文榜', typename: 'bw', title1: '' ,title2: '' , title3: '', bg: ''},
    array:[1,2,3],
    bottomOne: "Copyright @2016 北京微指数科技有限公司"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 进入页面的时候请求微信的数据
    var that = this;
    wx.request({
      url: 'http://www.weizhishu.com/phonehotlist/microwblistapi',
      success: function (res) {
         that.setData({
            staffA: {firstName: '微指数榜', typename: 'wzs', title1: res.data.data.wei[0].name ,title2: res.data.data.wei[1].name , title3: res.data.data.wei[2].name, bg: 'bg1'},
            staffB: {firstName: '传播榜', typename: 'cb', title1: res.data.data.spread[0].name ,title2: res.data.data.spread[1].name , title3: res.data.data.spread[2].name, bg: 'bg2'},
            staffC: {firstName: '估值榜', typename: 'gz', title1: res.data.data.value[0].name ,title2: res.data.data.value[1].name , title3: res.data.data.value[2].name, bg: 'bg1'},
            staffD: {firstName: '质量榜', typename: 'zl', title1: res.data.data.quality[0].name ,title2: res.data.data.quality[1].name , title3: res.data.data.quality[2].name, bg: 'bg2'},
            staffE: {firstName: '活跃榜', typename: 'hy', title1: res.data.data.active[0].name ,title2: res.data.data.active[1].name , title3: res.data.data.active[2].name, bg: 'bg1'},
            staffF: {firstName: '爆文榜', typename: 'bw', title1: res.data.data.article[0].title ,title2: res.data.data.article[1].title , title3: res.data.data.article[2].title, bg: 'bg2'},
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
  wx: function(){
    wx.navigateTo({
      url: '../list/index'
    })
  },
  checkwzs: function(){
    //微指数榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=wbaccount'
    })
  },
  checkcb: function(){
    //传播榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=wbspread'
    })
  },
  checkgz: function(){
    //估值榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=wbvalue'
    })
  },
  checkzl: function(){
    //质量榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=wbquality'
    })
  },
  checkhy: function(){
    //活跃榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=wbactive'
    })
  },
  checkbw: function(){
    //爆文榜
    wx.navigateTo({
      url: '../phonehotlist/wbaccount?type=getWbarticles'
    })
  }
})