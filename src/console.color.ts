interface colorInfo {
  color: string
  content: string
}

interface LogDataType {
  content: string,
  color: string[]
}

Object.defineProperty(console, "color", {
  value: function color (colorInfo: colorInfo[]) {
    const logData: LogDataType = {
      content: '',
      color: []
    }
    colorInfo.forEach((item) => {
      logData.content += `%c${item.content}`
      logData.color.push(`color:${item.color}`)
    })
    console.log(
      `${logData.content}`,
      ...logData.color
    )
  },
  enumerable: true,
})