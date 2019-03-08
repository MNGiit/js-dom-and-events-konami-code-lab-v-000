const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
document.body.addEventListener('keydown', onKeyDownHandler);


function init() {
  // Write your JavaScript code inside the init() function
  function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
   
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    
    console.log('key', key)
    
    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
        }
    } else {
      index = 0
      }
    }
  }
}