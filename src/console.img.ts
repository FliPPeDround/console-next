Object.defineProperty(console, "img", {
  value: function img (src: string, info: InfoType.ImgInfo) {
    if (!src) {
      console.warn('missing imgSrc property')
      return
    }
    const width = info?.width ?? 320
    const height = info?.height ?? 240
    console.log(
      "%c ",
      `background: url(${src}) no-repeat;
      background-size: ${width}px ${height}px;
      padding-left: ${width}px;
      line-height: ${height}px;`
    )
  },
  enumerable: true,
})
