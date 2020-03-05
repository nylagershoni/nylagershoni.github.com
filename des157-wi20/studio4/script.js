

          var hydro = document.querySelector("#hydro");
          var laptop = document.querySelector('#laptop');
          var backpack = document.querySelector('#backpack');
          var mydiv = document.getElementById("text");
      
          hydro.addEventListener('click', function() {
            overlay.style.display = 'block';
          }, false);
          closeOne.addEventListener('click', function() {
            overlay.style.display = 'none';
          }, false);
          
          laptop.addEventListener('click', function() {
            overlayTwo.style.display = 'block';
          }, false);
          closeTwo.addEventListener('click', function() {
            overlayTwo.style.display = 'none';
          }, false);
          
          backpack.addEventListener('click', function() {
            overlayThree.style.display = 'block';
          }, false);
          closeThree.addEventListener('click', function() {
            overlayThree.style.display = 'none';
          }, false);
    