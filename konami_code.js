const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler);
  

} // init close

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    let index = 0;
    let correct = 0;
    if (key === code[index]) {
      index++;
      correct++;
      if (correct === code.length) {
        alert("Hurray!");
 
        index = 0;
      }
    } else {
      correct = 0;
      index = 0;
    }
  }