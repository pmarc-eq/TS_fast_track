function propsCount(currentObject) {
    if (!(typeof currentObject === "object")) {
        throw new Error('parameter is no an object')
    }
    return Object.keys(currentObject).length
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
    };
console.log(propsCount(mentor))
