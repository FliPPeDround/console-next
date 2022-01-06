export{}
declare global {
  interface Console {
    npm(pkgName: string, type?: {
      type?: 'module'
    }): void

    loading(str: string): void

    img(url: string, attr?: {
      width?: number
      height?: number
    }): void

    video(url: string, attr?: {
      width?: number
      height?: number
      loop?: boolean
    }): void
  }
}