import './style.css'
import 'console-next'

// (async () => {
//   await console.npm('lodash')
// })()

const app = document.querySelector<HTMLDivElement>('#app')!
console.color([
  {
    color: '#213547',
    content: ' console-next ',
    backgroundColor: '#42d392',
  },
  {
    color: '#91c8e4',
    content: ' v0.1.5 ',
    backgroundColor: '#3a3a3a',
  },
])
// eslint-disable-next-line no-console
console.color([
  {
    color: '#91c8e4',
    content: 'Hello console-next',
    backgroundColor: 'linear-gradient(to right, #42d392, #3a3a3a)',
  },
])
// let i = 10
// console.progress(i, () => {i = i+7; return i}, 1000)
app.innerHTML = `
  <h1 class="h1a">Hello WeirdConsole</h1>
  <p class="edit-box">console.edit编辑实验区</p>
`
console.edit('.edit-box')
console.dom('.edit-box')
console.dom('#app')
console.dom()

console.img('https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png', { width: 40, height: 40 })
