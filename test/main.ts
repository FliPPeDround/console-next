import './style.css'
import './../src/index'

// (async () => {
//   await console.img('dda', {
//     width: 800,
//     height: 122
//   })
// })()

const app = document.querySelector<HTMLDivElement>('#app')!
console.color([
  {
    color: 'red',
    content: '红'
  },
  {
    color: 'rgba(255,255,255)',
    content: '蓝'
  },
])

app.innerHTML = `
  <h1 class="h1a">Hello WeirdConsole</h1>
  <p class="edit-box">console.edit编辑实验区</p>
`
console.edit('#edit-box')
