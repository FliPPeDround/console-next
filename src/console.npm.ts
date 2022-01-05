import { NpmInfo } from './types'

function npmDownload (src: string, originName: string, info: NpmInfo, successCallback: (arg0: void) => void, errorCallback: (arg0: void) => void) {
  console.loading(`'${originName}' is loading...`)
  console.time(`📂 '${originName}' is loaded,timer`)
  console.time(`🔒 '${originName}' Fail to load,timer`)
  const npmInstallScript = document.createElement('script')
  info?.type === 'module' && npmInstallScript.setAttribute('type', 'module')
  npmInstallScript.src = src
  npmInstallScript.onload = () => {
    successCallback(console.timeEnd(`📂 '${originName}' is loaded,timer`))
  }
  npmInstallScript.onerror = () => {
    errorCallback(console.timeEnd(`🔒 '${originName}' Fail to load,timer`))
  }
  document.body.appendChild(npmInstallScript)
  document.body.removeChild(npmInstallScript)
}

function npmInstallInBrowser (name: string, info: NpmInfo, successCallback: { (value: unknown): void; (arg0: void): void; (arg0: void): void }, errorCallback: { (reason?: any): void; (arg0: void): void; (arg0: void): void }) {
  const originName = name.trim()
  console.log(originName)
  if (/^https?:\/\//.test(originName)) {
    npmDownload(originName, originName, info, successCallback, errorCallback)
  } else {
    npmDownload(`https://unpkg.com/${originName}`, originName, info, successCallback, errorCallback)
  }
}

Object.defineProperty(console, "npm", {
  value: async function npm (name: string, info: NpmInfo) {
    if (!name) {
      console.error('missing originName property')
      return
    }
    if (info?.type !== 'module' && info?.type !== undefined) {
      console.error("type must be 'module'")
      return
    }
    await new Promise((resolve, reject) => {
      npmInstallInBrowser(name, info, resolve, reject)
    })
  },
  enumerable: true,
})