// welcome message

var user = "Xia";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest reviews!";
var greetingEl = document.getElementById('greeting');
//document is an object representation of your page
//objects have properties and methods
//getElementById is getting the "greeting" id then storing it into "greetingEl"
//greetingEl is holding a reference point

greetingEl.textContent = greeting;
//set the text content property to greeting


// shorthand for declaring variables
var price = 20, 
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

//toFixed is a method that is part of the "Number" built in Object