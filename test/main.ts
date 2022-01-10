import './style.css'
import './../src/index'

// (async () => {
//   await console.npm('lodash')
// })()

const app = document.querySelector<HTMLDivElement>('#app')!
console.color([
  {
    content: '你好',
    backgroundColor: 'red'
  },
  {
    color: 'rgba(0,0,255)',
    content: '蓝',
    backgroundColor: 'white'
  },
])

app.innerHTML = `
  <h1 class="h1a">Hello WeirdConsole</h1>
  <p class="edit-box">console.edit编辑实验区</p>
`
console.edit('.edit-box')
