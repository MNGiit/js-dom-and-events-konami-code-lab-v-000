const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
document.body.addEventListener('keydown', onKeyDownHandler);


function init() {
  // Write your JavaScript code inside the init() function
  
  // document.body.addEventListener("keydown", (e) => {
  //  const key = e.key
  const input = document.querySelector('input');
 
  input.addEventListener('keydown', function(e) {
    console.log(e.which);
  });
  
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert("Hurray!");
        
        index = 0;
      }
      
    } else {
      index = 0;
    }
    
  } // onKeyDownHandler close
  
} // init close