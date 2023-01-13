setTimeout(()=>{
  console.log(Date.now())
},0)
console.log(Date.now())


setTimeout(()=>{
  setTimeout(()=>{
    setTimeout(()=>{
      setTimeout(()=>{
        setTimeout(()=>{
          console.log(Date.now())
        },0)
      },0)
    },0)
  },0)
},0)
console.log(Date.now())