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
    if (figureObj.type === 'triangle') {
        const figure = figureObj as Triangle
        return ` Triangle with base ${figure.base} and height ${figure.height} has an area of ${0.5 * figure.base * figure.height}`
    } else if (figureObj.type === 'rectangle') {
        const figure = figureObj as Rectangle
        return ` Rectangle with width ${figure.width} and height ${figure.height} has an area of ${figure.width*figure.height}`
    }else if (figureObj.type === 'circle') {
        const figure = figureObj as Circle
        return ` Circle with radius ${figure.radius} has an area of ${(Math.PI*figure.radius**2).toFixed(2)}`
    }   
}