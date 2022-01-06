declare namespace InfoType {
  interface ImgInfo {
    width?: number
    height?: number
  }
  
  interface NpmInfo {
    type?: 'module'
  }
  
  interface VideoInfo extends ImgInfo{
    loop?: boolean
  }
}