// pages/chat/chat.js
Page({
    data: {
        messages: []
    },
    onLoad: function () {
        this.setData({
            messages: [
                { type: "system", content: "欢迎来到智易 bot！我可以帮您评估闲置物品的价值，还能帮你找到合适的买家。有什么想问的吗？" }
            ]
        });
    },
    onSend: function () {
        const userMessage = "我想卖一台闲置的笔记本电脑，但不知道该卖多少钱。";
        this.setData({
            messages: this.data.messages.concat([{ type: "user", content: userMessage }])
        });
        wx.request({
            url: "https://your-backend-api.com/chat",
            method: "POST",
            data: { userMessage: userMessage },
            success: function (res) {
                const aiReply = res.data.reply;
                this.setData({
                    messages: this.data.messages.concat([{ type: "ai", content: aiReply }])
                });
            }.bind(this)
        });
    }
});