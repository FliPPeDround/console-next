Object.defineProperty(console, 'dom', {
  value: function dom(selectors: string) {
    if (selectors) {
      const dom = document.querySelector<HTMLElement>(selectors)
      if (dom)
        console.log(dom)

      else
        console.warn(`'${selectors}' missing, please check it`)
    }
    else {
      console.log(document.body)
    }
  },
  enumerable: true,
})
