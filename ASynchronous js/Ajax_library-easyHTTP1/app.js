const http = new easyHTTP;

// // GET POSTS
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// GET SINGLE POSTS
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// // //POST
// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update Post
http.put('http://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// Delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});