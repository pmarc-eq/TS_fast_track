type Data = string | number | boolean | number[]

function processData (param: Data): Data | void  {
    if (typeof param === 'string') {
        return param.toUpperCase();
    } else if (typeof param === 'number') {
        return param ** 2;
    } else if (typeof param === 'boolean') {
        return !param;
    } else if (param instanceof Array) {
       if (param.length > 0) {
        return param.map(x => x ** 2);
       }
       else {
        return param;
       }
    }
}
