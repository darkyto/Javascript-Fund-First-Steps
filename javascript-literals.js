var num = 5;	 // decimal
var numHex = 0x7B; // hex
var numOctal = 076; // octal
var numbers = []; //empty array
var colors = ['red','blue']; // array of strings
var text = 'some ala bala nica text'; // string 
var isTrue = false; //boolean
var myPerson = {
FirstName : 'John',
LastName : 'Smith',
}; // object

var allVariablesArray = [num, numHex, numOctal, numbers , colors , text, isTrue,myPerson];

var variableFunction = function () {
	for (var i = 0; i < allVariablesArray.length; i+=1) {
		console.log(allVariablesArray[i]);
	}
};
variableFunction();

var variableTypes = function () {
	for (var i = 0; i < allVariablesArray.length; i+=1) {
		console.log(typeof allVariablesArray[i]);
	}
};
variableTypes();

var varNull = null;
var varUndefined = undefined;

console.log(typeof varNull);
console.log(typeof varUndefined);