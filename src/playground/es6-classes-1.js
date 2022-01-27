class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return this.name + ' be quiet' + '!';
        return `Hi. My name is ${ this.name }, and I am ${ this.age } years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasMajor()) {
            greeting += ` with a major in ${this.major}.`;
        }
        return greeting;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` and I am from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Frodo Baggins', 40, 'Denver');
console.log(me.getGreeting());

const other = new Person('Sam Smells', 39);
console.log(other.getGreeting()); 

const people = new Student('Jimbo Smalls', 100, 'Preforming Arts');
console.log(people.getGreeting());