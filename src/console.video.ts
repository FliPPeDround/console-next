let old_imgSrc = ''
function captureImage(ctx: HTMLCanvasElement, video: HTMLVideoElement) {
  ctx.getContext('2d')?.drawImage(video, 0, 0, video.width, video.height)
  const imgSrc = ctx.toDataURL()
  if (old_imgSrc !== imgSrc)
    console.img(imgSrc, { width: video.width, height: video.height })

  old_imgSrc = imgSrc
}

Object.defineProperty(console, 'video', {
  value: function video(url: string, info: InfoType.VideoInfo) {
    if (!url) {
      console.warn('missing videoSrc property')
      return
    }

    const width = info?.width ?? 320
    const height = info?.height ?? 240
    const loop = Boolean(info?.loop)

    const video = document.createElement('video')
    video.setAttribute('crossOrigin', 'anonymous')
    video.setAttribute('width', `${width}`)
    video.setAttribute('height', `${height}`)
    video.setAttribute('autoplay', '')
    video.setAttribute('src', `${url}`)
    loop && video.setAttribute('loop', '')

    video.style.objectFit = 'fill'
    video.style.display = 'none'

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.style.display = 'none'

    video.addEventListener('play', () => {
      function drawFame() {
        requestAnimationFrame (() => {
          captureImage(canvas, video)
          drawFame()
        })
      }
      drawFame()
    })

    document.body.appendChild(video)
    document.body.appendChild(canvas)
  },
  enumerable: true,
})
