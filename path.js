const path = require('path');
const fs = require('fs');

// path.join ========================
// ../ 會抵消前面的路徑
// ../../ 會抵消兩個前面的路徑
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)

const pathStr2 = path.join(__dirname, "./files/score.txt")
console.log(pathStr2)

// path.join 會把 ./ 的點給去掉
fs.readFile(path.join(__dirname, 'files/score.txt'), 'utf8', function(err, data) {
  if (err) {
    return console.log('失敗：', err.message);
  }
  console.log('成功：', data);
})

// path.basename ========================
// 定義文件存放路徑
const fpath = '/a/b/c/index.html'
const fullname = path.basename(fpath)
console.log('fullname:', fullname);

// 如果不想取得副檔名，可以在第二個參數中指定副檔名
const nameWithoutExt = path.basename(fpath, '.html')
console.log('nameWithoutExt:', nameWithoutExt);

// path.extname ========================
// 取得副檔名
const fext = path.extname(fpath)
console.log('fext:', fext);