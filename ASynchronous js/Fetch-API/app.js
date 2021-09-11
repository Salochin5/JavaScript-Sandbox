document.querySelector('#button1').addEventListener('click', getText);

document.querySelector('#button2').addEventListener('click', getJson);

document.querySelector('#button3').addEventListener('click', getExternal);

// Get Local Test files
function getText() {
    fetch('test.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.querySelector('#output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Arrow Function
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.querySelector('#output').innerHTML = data;
        })
        .catch(err => console.log(err));

}

// Get Local JSON files
function getJson() {
    fetch('posts.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);

            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}</li>`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Arrow Function
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}</li>`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => console.log(err));
}
// Get From External API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(user => {
                output += `${user.login}`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// Arrow Function

function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let output = '';
            data.forEach(user => {
                output += `${user.login}`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => console.log(err));
}