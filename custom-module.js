// 在一個字定義模塊中，默認情況下，module.exports = {}
// 向 module.exports 掛載 username 屬性，只有這樣，才能在外界使用 require 導入這個模塊的時候，得到這個屬性
// module.exports.username = "zs"

// module.exports.sayHello = function () {
//   console.log("Hello, World!")
// }

// 讓 module 直接指向對象
module.exports = {
  username: "zs",
  sayHello: function () {
    console.log("Hello, World!")
  },
}
