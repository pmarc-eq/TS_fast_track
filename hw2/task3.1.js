let numbs = [2,3,4,5]
let product_for = numbs[0]
let product_while = numbs[0]

for (let i = 1; i < numbs.length; i++) {product_for *= numbs[i]}
console.log("Product from for loop: " + product_for)

let i = 1
while (i < numbs.length){
    product_while *= numbs[i]
    i++ 
}
console.log("Product from while loop: " + product_while)