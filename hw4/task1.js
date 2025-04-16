function getPromise(message, delay) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(message);
        }, delay);
    })
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});