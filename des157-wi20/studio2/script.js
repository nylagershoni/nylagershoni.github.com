
 var hydroflask = document.querySelector("#hydroflask");
 var laptop = document.querySelector('#laptop');
 var backpack = document.querySelector('#backpack');
 var mydiv = document.getElementById("text");

 hydroflask.addEventListener('click', function(){
     mydiv.style.display = 'block';
     mydiv.innerHTML="<p>I always forget to drink water throughout the day. To remind myself I always carry my pink hydroflask. It helps to keep me hydrated and cut down on reusable bottles and cups.</p>";
 });

 laptop.addEventListener('click', function(){
     mydiv.style.display = 'block';
     mydiv.innerHTML="<p>As a college student, specifically, a design student, I can't do anything without my laptop. I take it to every class and use it to complete assignments, classwork, homework, etc.</p>";
 });

 backpack.addEventListener('click', function(){
     mydiv.style.display = 'block';
     mydiv.innerHTML="<p>My backpack carries everything I need to be successful. My hydroflask, laptop, chargers, school work, chapstick, pens, and anything else I need for the day!</p>";
 });
