<h1 align=center>console-next</h1>


This allows you to do some weird and useless in the browser's devtools

# Installation
#### Simply load it from a CDN:
```html5
<script src="https://unpkg.com/console-next"></script>
```

#### use npm:
```
npm i console-next
```

# Usage

```javascript
import 'console-next'
```

### console.npm

This methods help to you install npm packages in the devtools
```javascript
console.npm('module_name',{
  type?: 'module'
})
```


#### Import specific version:
```javascript
console.npm('loadsh@0.0.4')
```
#### use URL:
```javascript
console.npm('https://unpkg.com/loadsh@0.0.4/lodash.js')
```
#### 🌰 example：
```javascript
(async function () {
  await console.npm("loadsh")
  console.log(_.random(5)) //2
})()
```

### console.edit

This methods allows you webpage as editor

If no arguments are passed, all webpage will as editor
```javascript
console.edit()
```

Of course, you can also pass parameters and select a DOM as the editor
```javascript
console.edit('#app')
```

### console.dom

This methods will print dom elements in devtools

If no arguments are passed, will print 'document.body'
```javascript
console.dom()
```

Of course, you can also pass parameters and select a DOM to print
```javascript
console.dom('#app')
```

### console.color()

It can help you print out color information in the devtools

```typescript
console.color([
  {
    color?: string,
    content?: any,
    backgroundColor?: string
  }
])
```

#### 🌰 example：
```javascript
console.color([
  {
    color: 'red',
    content: 'red',
    backgrounColor: 'rgb(0, 255, 0)'
  },
  {
    color: 'rgb(0, 255, 0)',
    content: 'green'
  },
  {
    color: '#000FFF',
    content: 'blue'
  }
])
```

### console.img
if you want to print images in the devtools, let's use it
```javascript
console.img(url, {
  width?: number,
  height?: number
})
```


### console.video
If you still want to watch video in devtools, you must try it

```javascript
console.video(url, {
  width?: number,
  height?: number,
  loop?: boolean
})
```

### console.loading

a loading gif
```javascript
console.loading('loading...')
```

### console.progress

just a progressbar in devtools
```javascript
console.progress(percentage: number, callback: () => percentage, ms: number)
```

