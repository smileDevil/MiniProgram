//index.js
//获取应用实例
import actionRequest from '../../service/network.js'
const app = getApp()

Page({
  data:{
    motto:"helloworld",
    students:[
      {name:"xxx",age:12},
      { name: "yyy", age: 13 },
      { name: "zzz", age: 14 },
      { name: "xxx", age: 15 }
    ],
    titles:[

    ],
    title:""
  },
  gettitleClickTitle(event){
    this.setData({
      title:event.detail.title
    })
  },


  // 监听页面的生命周期
  //页面被加载
  onLoad(){
    // wx.showLoading({
    //   title: '正在获取数据',
    //   mask:true
    // })
    actionRequest({
      url:"http://120.194.202.70:70/Shine/APP70Data/getMineInfo",
    }).then(res => {
      // wx.showActionSheet({
      //   itemList: ["相册","拍照"],
      //   success:function(res){
      //     console.log(res.tapIndex)
      //   },
      //   fail:function(res){
      //     console.log(res.err)
      //   }
      // })
      //  wx.hideLoading()
        // wx.showToast({
        //   title: '获取成功',
        // })
      // wx.showModal({
      //   title: '提示',
      //   content: '获取成功',
      //   showCancel:false, //设置是否显示取消
      //   success:function(res){
      //     if(res.cancel){

      //     }
      //     if(res.confirm){

      //     }
      //   },
      // })
    }).catch(err => {
      
    })
      // wx.request({
      //   url: "http://120.194.202.70:70/Shine/APP70Data/getMineInfo",              header: {
      //     "Content-Type": "json"
      //   },
      //   success:function(res){
      //     console.log(res)
      //   },
      //   fail:function(error){
      //     console.log(error)
      //   }
      // })
  },
  //页面显示出来时
  onShow() { 

  },
  onReady(){
    //初次渲染完成的时候
  },
  
  onHide(){},
  onUnload(){

    // 监听的一些事件

  },
  
  // 自定义事件监听

  //其他监听
  //页面到底部
   onReachBottom(){

   },
   onPullDownRefresh(){
     console.log("下拉监听")
   },

  //分享
   onShareAppMessage:function(options){
     return {
       title:"矿山分享",
       
     }
   }
})
