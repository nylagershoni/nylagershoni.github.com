
window.addEventListener('load', function() {
    //How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    //How wide is each slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    //Total width of the slider
    const totalWidth = slideCount * slideWidth + 'px';
    //slider DOM element
    const slider = document.querySelector('#slider-wrapper ul');
    //Next button
    const next = document.getElementById('next');
    //previous button
    const previous = document.getElementById('prev');

    //upper left corner of slider
    let leftPosition = 0;
    //To keep track of each slide
    let counter = 0;
    //sets the width of the slider (also in CSS)
    slider.style.width = totalWidth;



next.addEventListener('click', function(evt) {
    evt.preventDefault();
    counter++;
    if (counter == slideCount){
        counter = 0;
        leftPosition =0;
        slider.style.left = leftPosition;
    }else{
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }
});

previous.addEventListener('click', function(evt) {
    evt.preventDefault();
    counter--;
    if (counter < 0){
        counter = slideCount - 1;
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }else{
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }
});
});


    // listen for the submission of the form
    document.getElementById("myform").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);

    });

    function makeMadLib(theWords){
        const madlib = `Thank You For Your Donation!`;

        //Get the madlib container
        const mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<p>${madlib}</p>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");

    }

    var heartsDiv = document.getElementById('hearts');

    this.className = 'submit';
    setTimeout(function(){
  
      heartsDiv.innerHTML = "<img src= 'images/stars.gif'>";
      var cat = document.createElement('img');
  
    }, 300);