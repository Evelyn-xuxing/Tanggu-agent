// pages/upload/upload.js
Page({
    data: {
        imagePath: ""
    },
    onLoad: function () {},
    chooseImage: function () {
        var that = this;
        wx.chooseImage({
            success: function (res) {
                var imagePath = res.tempFilePaths[0];
                that.setData({ imagePath: imagePath });
                // 调用后端估价接口
                wx.request({
                    url: "https://your-backend-api.com/estimate",
                    method: "POST",
                    data: { image: imagePath },
                    success: function (res) {
                        console.log(res.data);
                        wx.navigateTo({ url: "/pages/chat/chat" });
                    }
                });
            }
        });
    }
});