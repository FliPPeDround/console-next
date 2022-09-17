interface ImgInfo {
  width?: number
  height?: number
}

Object.defineProperty(console, 'img', {
  value: async function img(src: string, info?: ImgInfo) {
    if (!src) {
      console.warn('missing imgSrc property')
      return
    }
    const width = info?.width ?? 320
    const height = info?.height ?? 240
    if (src.startsWith('http'))
      src = `data:image/png;base64,${await imageToBase64Browser(src)}`

    console.log(
      // eslint-disable-next-line @typescript-eslint/quotes
      "%c ",
      `
      font-size: 1px;
      background-image: url(${src});
      background-repeat: no-repeat;
      background-size: ${width}px ${height}px;
      padding-left: ${width}px;
      line-height: ${height}px;
      color: transparent;`,
    )
  },
  enumerable: true,
})

function base64ToBrowser(buffer: ArrayBuffer) {
  return window.btoa([].slice.call(new Uint8Array(buffer)).map((bin) => { return String.fromCharCode(bin) }).join(''))
}

async function imageToBase64Browser(url: string) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  return base64ToBrowser(buffer)
}
