const fs = require('fs');

// __dirname 表示當前文件所處的目錄，絕對路徑
fs.readFile(__dirname + '/files/score.txt', "utf8", function (err, dataResult) {
  if (err) {
    return console.log("失敗：", err.message)
  }

  const arrOld = dataResult.split(" ")
  const arrNew = []

  arrOld.forEach((item) => {
    arrNew.push(item.replace("=", ": "))
  })

  const newStr = arrNew.join("\r\n")

  fs.writeFile(__dirname + "/files/score-ok.txt", newStr, function (err) {
    if (err) {
      return console.log("失敗：", err.message)
    }
    console.log("寫入成功")
  })
})
