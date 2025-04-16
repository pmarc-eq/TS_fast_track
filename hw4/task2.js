function calcArrProduct(arr) {
    return new Promise(function (resolve) {
        let res = 1
        for (item of arr) {
            if (!(typeof item === 'number')) {
                resolve("Error! Incorrect array!")
            }
            res *= item
        }
        resolve(res)
    })
}

calcArrProduct([3,4,5]).then(result => console.log(result));

calcArrProduct ( [5,"user2", 7, 12]).then(result => console.log(result));