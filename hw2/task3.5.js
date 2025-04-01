function findMin() {
    let res = arguments[0]
    for (let i in arguments) {
        res = res > arguments[i] ? arguments[i] : res
    }
    return res
}

console.log(findMin(12, 14, 4, -4, 0.2))