const path = require('path');
const fs = require('fs');

// STEP 1 - 定義正則表達式
// 其中 \s 表示恐白字符，\S 表示非空白字符，* 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// STEP 3 - 定義處理 css 樣式的方法
const resolveCSS = (htmlStr) => {
  // 使用正則表達式匹配出 css 樣式
  const r1 = regStyle.exec(htmlStr)
  // 將提取出來的樣式字串，進行 replace 替換，r1[0] 指到 <style>
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 將提取出來的樣式，寫入到 path-block 目錄中的 style.css 文件中
  fs.writeFile(path.join(__dirname, './index.css'), newCSS, function(err) {
    if (err) return console.log('寫入CSS樣式失敗：', err.message);
    console.log('寫入CSS樣式成功');
  })
}

// STEP 4 - 定義處理 script 的方法
const resolveJS = (htmlStr) => {
  // 使用正則表達式匹配出 script 標籤
  const r1 = regScript.exec(htmlStr);
  const newJS = r1[0].replace('<script>', '').replace('</script>', '');
  fs.writeFile(path.join(__dirname, './index.js'), newJS, function(err) {
    if (err) return console.log('寫入JS失敗：', err.message);
    console.log("寫入 JS 成功")
  });
}

// STEP 5 - 定義處理 HTML 的方法
const resolveHTML = (htmlStr) => {
  // 使用 replace 方法，把裡面 style 和 script 的部分替換掉
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')

  // 寫入 index.html
  fs.writeFile(path.join(__dirname, "index.html"), newHTML, function(err) {
    if (err) return console.log('寫入 HTML 失敗：', err.message);
    console.log("寫入 HTML 成功")
  })
}

// STEP 2 - 使用 fs 讀取需要被處理的 html 文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
    if (err) return console.log('失敗：', err.message)
    
    // 分別拆解出 CSS, js ,html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

