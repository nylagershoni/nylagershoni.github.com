( function (){

    'use strict'

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

    //This function takes an array input, then constructs the madlib, peppering
    //in the user's words where necessary.
    function makeMadLib(theWords){
        const madlib = `One wintery morning, I woke up to the sound of a ${theWords[0]}. I jumped out of bed and ran to the window to see that it was raining. I was sad, I wanted to spend the day playing with my ${theWords[1]}. I ${theWords[2]} to the living room and decided to watch some TV. I turned on ${theWords[3]} and instantly felt better. I went to the kitchen and grabbed some ${theWords[4]}. Turns out rainy days aren't so bad after all!`;

        //Get the madlib container
        const mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<p>${madlib}</p>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");

    }


}());