function raiseToDegree(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Parameter is not an integer")
    }

    return a ** b
}

const prompt = require('prompt-sync')({sigint: true});
const a = parseInt(prompt("Give a number to be raised: "))
const b = parseInt(prompt("Give a power number: "))

console.log(raiseToDegree(a, b))