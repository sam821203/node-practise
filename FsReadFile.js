// 只要安裝了 Node.js，就可以使用 require 來引入模組
const fs = require('fs');

/**
 * 讀取文件內容，中括號內的為可選參數
 * fs.readFile(path, [options], callback)
 * @param path 必選參數，表示文件路徑的字符串
 * @param options 可選參數，表示以什麼編碼格式讀取文件，默認為 utf8
 * @param callback 必選參數，文件讀取完成後，通過回調函數拿到讀取的結果
 */
fs.readFile('./files/read.txt', 'utf8', function(err, dataResult) {
    if (err) {
        return console.log("失敗：", err.message);
    }
    console.log("成功：", dataResult);
});