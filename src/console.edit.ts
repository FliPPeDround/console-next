Object.defineProperty(console, "edit", {
  value: function edit (selectors: string) {
    if(selectors){
      const dom = document.querySelector<HTMLElement>(selectors)
      if(dom){
        dom.contentEditable = true as unknown as string
      } else {
        console.warn(`'${selectors}' missing, please check it`)
      }
    }else {
      document.body.contentEditable = true as unknown as string
    }
  },
  enumerable: true,
})