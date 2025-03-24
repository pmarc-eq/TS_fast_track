function getFigureInfo(figureObj) {
    if (figureObj.type == 'triangle') {
        return " Triangle with base ".concat(figureObj.base, " and height ").concat(figureObj.height, " has an area of ").concat(0.5 * figureObj.base * figureObj.height);
    }
    else if (figureObj.type == 'rectangle') {
        return " Rectangle with width ".concat(figureObj.width, " and height ").concat(figureObj.height, " has an area of ").concat(figureObj.width * figureObj.height);
    }
    else if (figureObj.type == 'circle') {
        return " Circle with radius ".concat(figureObj.radius, " has an area of ").concat((Math.PI * Math.pow(figureObj.radius, 2)).toFixed(2));
    }
}
