// Page({
//   data: {
//     markers: [{
//       latitude: 23.099994,
//       longitude: 113.324520,
//       name: 'T.I.T 创意园',
//       desc: '我现在的位置'
//     }],
//     covers: [{
//       latitude: 23.099794,
//       longitude: 113.324520,
//       rotate: 10
//     }, {
//       latitude: 23.099298,
//       longitude: 113.324129,
//       rotate: 90
//     }]
//   }
// })
//location.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    point:{
      latitude: 319.9985137404,
      longitude: 116.4887074252
    },
    markers: []
  },
  onLoad: function() {
    var that = this;
    wx.getLocation( {
      type: 'wgs84',
      success: function( res ) {
        //测试获取的数据一直是一样的（TIT创意园），官方接口没真正开放，还是没发布的原因
        var latitude = res.latitude     //纬度，浮点数，范围为-90~90，负数表示南纬
        var longitude = res.longitude   //经度，浮点数，范围为-180~180，负数表示西经
        var speed = res.speed           //速度，浮点数，单位m/s
        var accuracy = res.accuracy;    //位置的精确度
        var point={
             latitude: latitude,
             longitude: longitude
        }
        var markers = [ {
          latitude: latitude,
          longitude: longitude,
          name: '地图定位',
          desc: '我现在的位置'
        }];
        that.setData( markers );
        that.setData( point );
      }
    })
  }
})
// <map longitude="{{point.longitude}}" latitude="{{point.latitude}}" markers="{{markers}}" covers="{{covers}}" style="width: 320px; height:420px;"></map>