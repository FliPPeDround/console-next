export{}
declare global {
  interface Console {
    npm(pkgName: string, type?: {
      type?: 'module'
    }): Promise<void>

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

    edit(selectors?: string): void

    color(color: {
      color?: string
      content?: any
      backgroundColor?: string
    }[]): void

    progress(percentage: number, callback: () => number, ms: number): void
  }
}