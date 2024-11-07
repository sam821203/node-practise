function updateClock() {
  const timeElement = document.getElementById("time")
  const dateElement = document.getElementById("date")

  const now = new Date()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const seconds = String(now.getSeconds()).padStart(2, "0")

  const day = String(now.getDate()).padStart(2, "0")
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const year = now.getFullYear()

  timeElement.textContent = `${hours}:${minutes}:${seconds}`
  dateElement.textContent = `${year}-${month}-${day}`
}

// 每秒更新一次時間
setInterval(updateClock, 1000)

// 初始呼叫一次以顯示時間
updateClock()
