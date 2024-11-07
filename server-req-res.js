const http = require("http")
const server = http.createServer()

// req 參數是請求對象，包含了客戶端發送過來的所有信息
server.on("request", (req, res) => {
  // req.url 是客戶端請求的 URL 地址
  const url = req.url
  // req.method 是客戶端請求的方法
  const method = req.method

  const str = `請求網址：${url}，請求方法：${method}`
  console.log(str)

  // 為了防止中文亂碼，需要在返回的時候告訴瀏覽器使用什麼編碼格式解析
  res.setHeader("Content-Type", "text/html; charset=utf-8")

  // 調用 res.end() 方法，給客戶端發送響應數據
  res.end(str)
})

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080")
})
