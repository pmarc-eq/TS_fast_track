type Triangle = {
    type: string;
    base: number;
    height: number;
};

type Rectangle = {
    type: string;
    width: number;
    height: number;
}

type Circle = {
    type: string;
    radius: number;
}

function getFigureInfo(figureObj: Triangle | Rectangle | Circle): string | void {
    if (figureObj.type == 'triangle') {
        return ` Triangle with base ${figureObj.base} and height ${figureObj.height} has an area of ${0.5*figureObj.base*figureObj.height}`
    } else if (figureObj.type == 'rectangle') {
        return ` Rectangle with width ${figureObj.width} and height ${figureObj.height} has an area of ${figureObj.width*figureObj.height}`
    }else if (figureObj.type == 'circle') {
        return ` Circle with radius ${figureObj.radius} has an area of ${(Math.PI*figureObj.radius**2).toFixed(2)}`
    }
    
}