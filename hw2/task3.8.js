function makeUpperFirstCases (text) {
    let splitted_text = text.split(" ")
    for (let i in splitted_text) {
        splitted_text[i] = String(splitted_text[i][0]).toUpperCase() + String(splitted_text[i]).slice(1)
    }
    return splitted_text.join(" ")
}

console.log(makeUpperFirstCases('i love java script'))