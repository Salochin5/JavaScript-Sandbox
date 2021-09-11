const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);

mary.getsMarried('Thomson');

console.log(mary.greeting());

// Another Syntax
const brad = Object.create(personPrototypes, {
    firstName: { value: 'Brad' },
    lastName: { value: 'Traversy' },
    age: { value: 36 }
});
console.log(brad);
console.log(brad.greeting());