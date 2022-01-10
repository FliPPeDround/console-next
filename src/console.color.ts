interface colorInfo {
  color?: string
  content?: any,
  backgroundColor?: string
}

interface LogDataType {
  content: string,
  css: string[]
}

Object.defineProperty(console, "color", {
  value: function color (colorInfo: colorInfo[]) {
    const logData: LogDataType = {
      content: '',
      css: []
    }
    colorInfo.forEach((item) => {
      logData.content += `%c${item?.content ?? ''}`
      logData.css.push(`${item?.color ? 'color:' + item.color : ''}` + `${item?.backgroundColor ? ';background-color:' + item.backgroundColor : ''}`)
    })
    console.log(
      `${logData.content}`,
      ...logData.css
    )
  },
  enumerable: true,
})