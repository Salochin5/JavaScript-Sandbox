class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Helo there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) { //This is a static method, its a standalon method that does not require the this.
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-19-1980');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried('Thompson');
console.log(mary);

console.log(Person.addNumbers(1, 2)); //This is how to call a static method.