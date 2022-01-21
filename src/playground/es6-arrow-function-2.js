const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// const user = {
//     name: 'Billy Bob',
//     cities: ['Denver', 'New York', 'Austin'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// user.printPlacesLived();

const user = {
    name: 'Billy Bob',
    cities: ['Denver', 'New York', 'Austin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());