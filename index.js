let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let positionInt = dodger.style.left;
    let position = parseInt(positionInt, 10);
   
    if (position > 0) {
      dodger.style.left = `${position - 1}px`;
    }
  }

  function moveDodgerRight() {
    let positionInt = dodger.style.left;
    let position = parseInt(positionInt, 10);
   
    if (position < 360) {
      dodger.style.left = `${position + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });