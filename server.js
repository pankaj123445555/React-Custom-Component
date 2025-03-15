const debounce = (callback,delay) =>{
     let id;
    clearTimeout(id)
     id = setTimeout(()=>{
              callback()
    },delay)
}

debounce(()=>{
    console.log('hey pankaj')
},3000);