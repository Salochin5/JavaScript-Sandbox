const btn = document.querySelector('.button');
btn.addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState); // Shows readyState 3 since it is processing request.
    }

    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);
            const test = document.querySelector('#output');
            test.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    ////////// Not Recommended
    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         test.innerHTML = this.responseText;
    //     }
    // }

    // If Something went Wrong
    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();

    // readyStatus Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "Ok"
    // 403: "Forbidden"
    // 404: "Not Found"
}