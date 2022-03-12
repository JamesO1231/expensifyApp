//Object destructuring

// const person = {
//     name: 'Andrew',
//     age: 34,
//     location: {
//         city: 'London',
//         temp: 98
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Sedimentary Geology',
//     author: 'Donald R. Prothero & Fred Schwab',
//     publisher: {
//         // name: 'W. H. Freeman and Company'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//Array destructuring

const address = ['1234 Way Lane', 'Denver', , '654321'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state} at ${street}`);

const item = ['black coffee', '$2.00', '$2.50', '$3.00']

const [coffee, small, medium, large] = item;

console.log(`You ordered a small ${coffee} that cost ${small}`);
