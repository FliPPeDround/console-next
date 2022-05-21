interface colorInfo {
  color?: string
  content?: any
  backgroundColor?: string
}

interface LogDataType {
  content: string
  css: string[]
}

Object.defineProperty(console, 'color', {
  value: function color(colorInfo: colorInfo[]) {
    const logData: LogDataType = {
      content: '',
      css: [],
    }
    colorInfo.forEach((item, index) => {
      logData.content += `%c${item?.content ?? ' '}`
      logData.css.push(
        `${item?.color ? `color:${item.color}` : ''}`
        + `${item?.backgroundColor ? `;background:${item.backgroundColor}` : ''}`
        + ';padding: 1.5px'
        + `${index === 0 ? ';border-top-left-radius: 3px; border-bottom-left-radius: 3px' : ''}`
        + `${index === colorInfo.length - 1 ? ';border-top-right-radius: 3px; border-bottom-right-radius: 3px' : ''}`,
      )
    })
    console.log(
      `${logData.content}`,
      ...logData.css,
    )
  },
  enumerable: true,
})
