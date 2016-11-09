function find(){
         wx:request({
           url: "https://release.weizhishu.com/wxlittlepro/categoryapi",
           success: function(res){
              // console.log(res)
           }
         })
}
module.exports.find = find