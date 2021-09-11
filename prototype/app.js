// Object prototype
// Person prototype

// Function constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate Age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get FullName
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Joe', '8-12-1999');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
console.log(mary.getsMarried());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName')); //True because its part of the main object not the object
console.log(mary.hasOwnProperty('getFullName')); //False because its not part of the main object