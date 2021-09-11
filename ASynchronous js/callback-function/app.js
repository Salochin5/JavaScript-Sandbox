const posts = [
    { title: 'post One', body: 'This is post one' },
    { title: 'post Two', body: 'This is post two' }
];

// SYNCHRONOUS WAY - Post Three doesn't load since createPosts() function loads 
// in two seconds while getPosts() loads in one secpnd.

// function createPosts(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';

//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPosts({ title: 'Post Three', body: 'This is post three' });

// getPosts();



///////////// ASYNCHRONOUS WAY USING A CALLBACK

function createPosts(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';

        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);