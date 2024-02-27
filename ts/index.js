var firstName = 'Roman';
var lastName = 'Chaban';
var userAge = 23;
var isMarried = false;
var empty = null;
var nothing = undefined;
var mySymbol = Symbol('userId');
var person = {
    name: 'Roman',
    age: 23,
    isMarried: false,
};
var newPerson = {
    name: 'Roman',
    age: 23,
    isMarried: 'Not married',
};
newPerson.favoriteColor = 'red';
var currentUser = {
    name: 'John',
    age: 40,
    hasChildren: true,
};
var greetingUser = function (greet, userName) {
    return "".concat(greet, " ").concat(userName);
};
console.log(greetingUser('Hello', 'Roman'));
