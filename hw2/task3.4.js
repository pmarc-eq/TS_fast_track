function raiseToDegree(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Parameter is not an integer")
    }

    return a ** b
}


console.log(raiseToDegree(2, 3))