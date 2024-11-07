// STEP1 導入需要的模組
const http = require("http")
const fs = require("fs")
const path = require("path")

// STEP2 創建 WEB 服務器實例
const server = http.createServer()

// STEP3 為服務器實例綁定 request 事件，監聽客戶端的請求
server.on("request", (req, res) => {
  /*
    3.1 獲取用戶請求的 URL 地址
    /clock/index.html
    /clock/index.css
    /clock/index.js
  */
  const url = req.url
  // 3.2 把請求的 URL 地址和文件路徑進行對應
  let fpath = ""

  if (url === "/") {
    fpath = path.join(__dirname, "clock/index.html")
  } else {
    // 幫用戶補 /clock 路徑
    fpath = path.join(__dirname, "/clock", url)
  }

  // 3.3 根據不同的 URL 地址，來讀取不同的內容
  fs.readFile(fpath, "utf8", (err, dataStr) => {
    // 讀取失敗
    if (err) return res.end("404 Not Found")
    // 讀取成功
    res.end(dataStr)
  })
})

// STEP4 啟動服務器
server.listen(80, () => {
  console.log("Server is running at http://localhost:80")
})
