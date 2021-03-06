// pages/orderDetail/orderDetail.js
const app = getApp()
const util = require('../../utils/util')
const tool = util.tool
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: {}
  },
  getdetail() {
    let that = this
    let opt = {
      id: that.data.id
    }
    tool({
      url: '/match/signUp/order/getById',
      data: opt
    }).then(res => {
      let rr = res.data.data
      tool({
        url: '/match/signUp/info/price/get',
        data: {
          id: rr.coupon
        }
      }).then(val => {
        let vv = val.data.data
        rr.spName = vv.name
        if (rr.shipState == 1) {
          rr.fhState = '已发货'
        }else if (rr.shipState == 2) {
          rr.fhState = '其他'
        } else{
          rr.fhState = '未发货'
        } 
        that.setData({
          msg: rr
        })
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu() //禁止分享
    this.setData({
      id: options.id
    })
    this.getdetail()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})