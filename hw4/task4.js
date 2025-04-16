const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));

async function showNumbers (N=2000) {
    for (let i = 0; i < 10; i++) {
        console.log(await delay(i, Math.floor(Math.random() * N)))
    }
}

showNumbers ( );