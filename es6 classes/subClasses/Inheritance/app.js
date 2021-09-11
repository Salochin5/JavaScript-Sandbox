class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// The Customer class in this instance is a sub-class of Person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // Super calls the parent class constructor where in this case its PERSON
        super(firstName, lastName);

        // Anything extra which is in the Customer class and not in the Person class has to be defined like below.
        this.phone = phone;
        this.membership = membership;
    }

    // We can create Customer specific methods as well
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'premium');

console.log(john);

// You can call the greeting method from John even though JOHN is from Customer since we extendede.
console.log(john.greeting());

// Since its a static method we use the actual class name which is Customer
console.log(Customer.getMembershipCost());

// We can use Person methods from Customer but not Customer from Person since we extended Customer from Person.
// ITS ONLY A ONE WAY.