const fs = require('fs')

const data = fs.readFileSync('package.json')

function replacer(key, value) {
  if (key === 'version') {
    const versionArry = value.split('.').map(Number)
    if (versionArry[2] + 1 > 9) {
      versionArry[2] = 0
      if (versionArry[1] + 1 > 9) {
        versionArry[1] = 0
        versionArry[0] += 1
      }
      else {
        versionArry[1] += 1
      }
    }
    else {
      versionArry[2] += 1
    }
    const version = versionArry.map(String).join('.')
    return version
  }
  return value
}

const newPackage = JSON.stringify(JSON.parse(data), replacer, 2)
fs.writeFileSync('package.json', newPackage, 'utf8')
