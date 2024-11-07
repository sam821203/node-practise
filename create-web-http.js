// STEP1 導入 http 模塊
const http = require("http")

// STEP2 創建 web 服務氣實例
const server = http.createServer()

// STEP3 為服務器實例綁定 request 事件，監聽客戶端的請求
// 第一參數: 事件名稱 第二參數: callback 函數
server.on("request", function (req, res) {
  console.log("Someone visit our web server")
})

// STEP4 啟動服務器，並監聽指定的端口
server.listen(8080, function () {
  console.log("Server is running at http://127.0.0.1:8080")
})
