import { NpmInfo, ImgInfo, VideoInfo} from './index'

declare global {
  interface Console {
    npm: (arg0: string, arg1?: NpmInfo) => {}
    loading: (arg0: string) => {}
    img: (arg0: string, arg1?: ImgInfo) => {}
    video: (arg0: string, arg1?: VideoInfo) => {}
  }
}
export{}
