function progressStyle (percentage: number, progressInterval: NodeJS.Timer) {
  const stroke = '█'
  const unstoke = '░'

  if (percentage >= 100) {
    console.clear()
    console.log(`${stroke.repeat(40)} 100%`)
    console.color?.([{
      color: 'rgb(0,255,0)',
      content: '❤️ success loaded'
    }])

    clearInterval(progressInterval)

    return
  }

  const strokeWidth = Math.round(percentage/100*40)
  const unstrokeWidth = 40 - strokeWidth

  console.clear()
  console.log(`${stroke.repeat(strokeWidth)}${unstoke.repeat(unstrokeWidth)} ${percentage}%`)
}

Object.defineProperty(console, "progress", {
  value: function progress (percentage: number, callback: () => number, ms: number) {
    const progressInterval = setInterval(() => {
      progressStyle(percentage, progressInterval)
      percentage = callback()
    }, ms)
  },

  enumerable: true,
})
