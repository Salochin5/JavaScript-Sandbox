const http = new EasyHTTP;

// GET Users Data
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Create DATA for POST
const data = {
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    username: 'jdoe'
}

// POST Users DATA
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// PUT / UPDATE Users DATA
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// DELETE Users DATA
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));