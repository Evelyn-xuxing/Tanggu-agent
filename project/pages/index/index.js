Page({
  data: {
    // 可扩展数据
  },

  // 导航到上传页
  navToUpload() {
    wx.navigateTo({
      url: '/pages/upload/upload',
      success: () => wx.reportAnalytics('nav_upload', {})
    })
  },

  // 导航到管理页
  navToManage() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  // 动态数据更新示例
  updateData() {
    // 可接入API获取实时数据
    this.setData({
      'dashboard[0].value': Math.floor(Math.random()*100),
      'dashboard[1].value': Math.floor(Math.random()*5000)
    })
  }
})