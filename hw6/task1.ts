function display (str: string) : void;
function display (str: string, str2: string) : void;
function display (str: string[]) : void;
function display (str: string | string[], str2?: string) {
    if (typeof str === 'string') {
        console.log(str)
        if (str2 !== undefined) {
            console.log(str2)
        }
    }
    else {
        for (var item of str) {
            console.log(item)
        }
    }
}