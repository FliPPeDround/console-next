import './style.css'
import './../dist/weirdconsole.es'

(async () => {
  await console.img('dda', {
    width: 800,
    height: 122
  })
})()

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello WeirdConsole</h1>
`
