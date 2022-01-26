class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return this.name + ' be quiet' + '!';
        return `Hi. My name is ${ this.name }, and I am ${ this.age }`;
    }
}

const me = new Person('Frodo Baggins', 40);
console.log(me.getGretting());

const other = new Person('Sam Smells', 39);
console.log(other.getGretting()); 

const people = new Person('Jimbo Smalls', 100);
console.log(people.getGretting());