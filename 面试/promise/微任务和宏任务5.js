new Promise((resolve,reject)=>{
  console.log(1);
  setTimeout(()=>{
    console.log(2);
  });
  resolve();
}).then(()=>{
  console.log(3);
}).then(()=>{
  return new Promise((resolve,reject)=>{
    console.log(4);
  }).then(()=>{
    console.log(5);
  });
}).then(()=>{
  console.log(6);
});
console.log(7);
