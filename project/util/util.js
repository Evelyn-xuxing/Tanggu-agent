// utils/util.js
// 可以在这里添加一些工具函数
function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hour = date.getHours().toString().padStart(2, '0');
    var minute = date.getMinutes().toString().padStart(2, '0');
    var second = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

module.exports = {
    formatDate: formatDate
};