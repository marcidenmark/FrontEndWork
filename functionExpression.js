// FUNTIONAL EXPRESSION
// Expression is with naming a variable that it will equal to.
// often with const or let

// SYNTAX:
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};

//EXAMPLE 1 Functional expression
const x = function(y) {
	return y * y;
};
//EXAMPLE 2 Functional expression
let getRectArea = function(width, height) {
	return width * height;
}
console.log(getRectArea(3,4));

// But, I don't understand how this can fit that definataion.
// Being used as a callback
button.addEventListener('click', function(event) {
		  console.log('button is clicked!')
})
