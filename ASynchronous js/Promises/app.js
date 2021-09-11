const posts = [
    { title: 'post One', body: 'This is post one' },
    { title: 'post Two', body: 'This is post two' }
];


///////////// PROMISES.

function createPosts(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }

            resolve();
        }, 2000);
    });


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

createPosts({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(function(err) {
        console.log(err);
    })