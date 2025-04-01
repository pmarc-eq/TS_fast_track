function randArray (k) {
    let res_array = []
    while (res_array.length < k) {
        res_array.push(Math.floor(Math.random() * 500 + 1))
    }
    return res_array
}

console.log(randArray(5))