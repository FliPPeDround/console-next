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
      src = await imageToBase64ByCanvas(src)

    console.log(
      '%c ',
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

async function imageToBase64ByCanvas(src: string): Promise<string> {
  const img = new Image()
  img.src = src
  img.setAttribute('crossOrigin', 'Anonymous')
  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const dataURL = canvas.toDataURL('image/png')
      resolve(dataURL)
    }
  })
}
