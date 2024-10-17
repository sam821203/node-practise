// 只要安裝了 Node.js，就可以使用 require 來引入模組
const fs = require('fs');

/**
 * 寫入文件內容，中括號內的為可選參數
 * fs.writeFile(file, data, [options], callback)
 * @param file 必選參數，需要指定一個文件路徑的字串，表示文件的存放路徑
 * @param data 必選參數，表示要選入的內容
 * @param options 可選參數，表示以什麼編碼格式讀取文件，默認為 utf8
 * @param callback 必選參數，文件讀取完成後，通過回調函數拿到讀取的結果
 */
fs.writeFile("./files/write.txt", "write something", function (err) {
  // 如果文件寫入失敗，err 就是一個錯誤對象，否則就是 null
  if (err) {
    return console.log("失敗：", err.message);
  }
  console.log('寫入成功');
});