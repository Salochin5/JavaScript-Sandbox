/**
 **  EasyHTTP Library
 **  Library for making HTTP requests
 **
 **  @version 1.0.0
 **  @version Nicky Salochin
 **  @licence MIT*
 **
 **
 **/


function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// MAKE A HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}

// MAKE A HTTP POST REQUEST
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// MAKE A HTTP PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, data);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// MAKE A HTTP DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted!');
        } else {
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}