// async function myFunc() {
//     // return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello World!'), 2000);
//     });

//     const error = false;

//     if (!error) {
//         const res = await promise; //Waits until the promise is resolved, 1 second.
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went terribly wrong...'));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers() {
    // Await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolved
    return data;
}

getUsers()
    .then(res => console.log(res));