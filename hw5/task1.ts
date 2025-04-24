function superSort(arr: string[], direction: "asc" | "desc") : string[] {
    let res = arr.toSorted()
    return direction === "asc" ? res : res.reverse()
}

let names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); 

type SortFunction = (arr: string[], direction: "asc" | "desc") => string[]
const func: SortFunction = superSort; 
const result = func(["A", "C", "D", "B"], "desc");

console.log(result); 