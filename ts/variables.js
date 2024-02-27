var userFirstName = 'Roman';
var someLuckyNumber = 199;
var isEmpty = true;
var empty_01 = null;
var nothing_02 = undefined;
console.log(userFirstName.charAt(0));
var showUserFullName = function (user) {
    return "".concat(user.name, " ").concat(user['last name']);
};
console.log(showUserFullName({ name: 'Roman', 'last name': 'Chaban' }));
function isDog(dogParam) {
    return "Do you have a dog? ".concat(dogParam);
}
console.log(isDog(true));
var person_02 = {
    name: 'Roman',
    age: 23,
    car: {
        color: 'blue',
    },
};
console.log(person_02);
var newUser = {
    name: 'Roman',
    age: 23,
};
console.log(newUser);
