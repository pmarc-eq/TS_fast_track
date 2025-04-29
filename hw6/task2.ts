type arrayWithRatingField = {
    rating: number;
    [propName: string]: any;
}

function identity<Type extends arrayWithRatingField>(arr: Type[]): Number {
    let sum: number = 0
    for (var item of arr) sum+=item.rating
    return  sum/arr.length
}

const item1: arrayWithRatingField = {rating: 3, eee: 2}
const item2: arrayWithRatingField = {rating:5}

console.log(identity([item1, item2]))