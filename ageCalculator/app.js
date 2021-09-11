const name1 = document.querySelector('#name');
const dob = document.querySelector('#dob');
const submit = document.querySelector('#submit');

function Person(name, dob) {
    this.name = name;

    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Brad', '09-08-1890');
console.log(brad.calculateAge());