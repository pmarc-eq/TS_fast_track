function processData(param) {
    if (typeof param == 'string') {
        return param.toUpperCase();
    }
    else if (typeof param == 'number') {
        return Math.pow(param, 2);
    }
    else if (typeof param == 'boolean') {
        return !param;
    }
    else if (param instanceof Array) {
        if (param.length > 0) {
            return param.map(function (x) { return Math.pow(x, 2); });
        }
        else {
            return param;
        }
    }
}
