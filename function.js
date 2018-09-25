// Every JS funtion is actually a function object
(function(){}).constructor === Function
//which returns true.

// The Function constructor creates a new Function object.
// Calling the constructor directly can create functions dynamically,

// The Function constructor allows executing code in the global scope,

// Functions created with the Function constructor do not create closures.

// They always are created in the global scope.

// When running them, they will only be able to access their own local variables and global ones,
// not the ones from the scope in which the Function constructor was created.
// What???????

//SYNTAX
new Function ([arg1[, arg2[, ...argN]],] functionBody)

//EXAMPLE 1
sum = new Function('a', 'b', 'return a + b');

//example:
// class SearchBar extends Component {
//   constructor(props) {}

// resource info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
