export interface ImgInfo {
  width?: number
  height?: number
}

export interface NpmInfo {
  type?: 'module'
}

export interface VideoInfo extends ImgInfo{
  loop?: boolean
}