//aficher donner console
 
    fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
 
    aficherInstruments(data)
 
 
})

 
 
