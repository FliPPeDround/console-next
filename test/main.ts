import './../dist/weirdconsole.es'

(async () => {
  await console.npm('loadsh')
  console.log(_.random())
})()

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello WeirdConsole</h1>
`
