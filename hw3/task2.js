let arbitraryObject = {
    name: 'test',
    id: 13,
    isGood: true,
    age: null,
    help: 'no'
}

function showProps(obj) {
    if (!(typeof obj === "object")) {
        throw new Error('parameter is no an object')
    }

    console.log(Object.keys(obj))
    console.log(Object.values(obj))
}

showProps(arbitraryObject)