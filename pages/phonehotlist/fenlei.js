function find(){
         wx:request({
           url: "http://www.weizhishu.com/phonehotlist/categoryapi",
           success: function(res){
              // console.log(res)
           }
         })
}
module.exports.find = find