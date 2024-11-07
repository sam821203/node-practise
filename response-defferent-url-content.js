const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
  // 取得 URL 地址
  const url = req.url

  // 設置默認的響應內容 404
  let content = "404 Not Found"
  // 判斷用戶請求是否為 / 或 /index.html 首頁
  // 判斷用戶請求是否為 /about.html 關於我們頁面
  if (url === "/" || url === "/index.html") {
    content = "<h1>首頁</h1>"
  } else if (url === "/about.html") {
    content = "<h1>關於我們</h1>"
  }
  // 設置 Content-Type
  res.setHeader("Content-Type", "text/html; charset=utf-8")

  // 調用 res.end() 方法，給客戶端發送響應數據
  res.end(content)
})

server.listen(80, () => {
  console.log("Server is running at http://localhost:80")
})
