// FUNTIONAL EXPRESSION
1. A funtional expression needs to be defined before you can use it.
--You can't use function expressions before you define them
(this means that there is no hoisting with them)

2. A function expression DOES NOT need a name.
therefor anonymous funtions are found.
IIFE (Immediately Invoked Function Expression)
It runs as soon as it is defined.

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



