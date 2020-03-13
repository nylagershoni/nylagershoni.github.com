
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

var thisButton = document.querySelector('.cube');
var heartsDiv = document.getElementById('hearts');
var textField = document.getElementById('amount');
var defaultButtonText = document.querySelector('.default-state span');
var defaultButton = document.querySelector('.default-state');

thisButton.addEventListener('click', function(event) {

  if (textField.value !=''){

  this.className = 'cube flip';
  setTimeout(function(){

    heartsDiv.innerHTML = "<img src= 'images/hearts.gif'>";
    var cat = document.createElement('img');
    cat.setAttribute('src', 'images/cat.png');
    cat.setAttribute('class', 'cat');
    document.querySelector('body').appendChild(cat);
    cat.className += 'moveImg';

  }, 300);
  
} else {
  defaultButtonText.innerHTML = 'Please Enter an Amount';
  defaultButton.selectAttribute('style', 'background-color: rgba(205,0,4,1.00)');
  setTimeout(function() {
    defaultButtonText.innerHTML = 'donate';
    defaultButton.removeAttribute('style');
  },2000);
}
});