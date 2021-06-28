export const addIngeenerThunk = (info) => {
  return () => {
    fetch('/engineer',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({info})
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
}
