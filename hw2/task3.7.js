function getArrayLastElements (arr, x=1) {
    return arr.slice(-x)
}

console.log(getArrayLastElements([ 3 , 4 , 10, - 5 ], 8))