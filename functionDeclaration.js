function DECLARATION / function STATEMENT
1. A function declaration MUST have a name.
//
2. HAS NO EQUAL sign. True?
3. It defines a function with specified parameters.
4. You can use the function before you declared it
(so yes hoisting.)

// SYNTAX
function name([param[, param,[..., param] ] ] ) {
   [statements]
}
// EXAMPLE 1 Functional declaration
function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(5, 6));

// EXAMPLE 2 Functional declaration
function calc_sales(units_a, units_b, units_c) {
   return units_a * 79 + units_b * 129 + units_c * 699;
}
question:
do you need the word function? I don't think so.
