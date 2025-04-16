const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));

function showNumbers (N=2000) {
    let chain = Promise.resolve()
    for (let i = 0; i < 10; i++) {
        chain = chain.then(()=>delay(i, Math.floor(Math.random() * N)))
        chain.then(function(result) {
            console.log(result)
        })
    }
}

showNumbers ( );
