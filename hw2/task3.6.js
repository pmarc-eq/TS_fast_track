function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false
            }
        }
    }
    return true
}

console.log(findUnique ([1, 2, 3, 5, 2]))