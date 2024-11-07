// 在外界使用 require 導入一個自定義模塊的時候，得到的成員，就是那個模塊中 module.exports 指向的對象
const m = require("./custom-module")

console.log("m:", m)
