const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function onKeyDownHandler(e) {
    let key = e.parseInt(e.detail || e.which);
    
    // check if key equals value of code in the correct part of code array
    if (code[index] === key) {
      ++index;
    } else {
      index = 0;
    }
    
    // checks if index is equal to code length. if it is, do an alert
    if (index === code.length) {
      window.alert("Hurray!");
      index = 0;
    }
    
  } // end of function
  

} // init close

//  passes 1 test, but not the code triggers an alert if the right code is entered
//  function onKeyDownHandler(e) {
//    const key = parseInt(e.detail || e.which);
//    let index = 0;
//    let correct = 0;
//    if (key === code[index]) {
//      index++;
//      correct++;
//      if (correct === code.length) {
//        alert("Hurray!");
// 
//        index = 0;
//      }
//    } else {
//      correct = 0;
//      index = 0;
//    }
//  }