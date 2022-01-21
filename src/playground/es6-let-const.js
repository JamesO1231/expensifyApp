var nameVar = 'Bob';
nameVar = 'Bill'
console.log('nameVar', nameVar);

let nameLet = 'Sally';
nameLet = 'Jill';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}