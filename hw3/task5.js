class GeometricFigure {
    getArea() {
        return 0 
    }

    toString() {
        return Object.getPrototypeOf (this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }

    getArea() {
        return 0.5 * this.base * this.height
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super()
        this.side = side
    }

    getArea() {
        return this.side ** 2
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super()
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

function handleFigures(figures) {
    let totalArea = 0
    for (f of figures) {
        if (f instanceof GeometricFigure) {
            let area = f.getArea()
            console.log('Geometric figure: ' + f.toString() + ' - area: ' + area)
            totalArea += area
        }
    }
    return totalArea
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; 
console.log( handleFigures (figures));

const totalArea = figures.reduce((accumulator, currentValue) => accumulator + currentValue.getArea(), 0)
console.log(totalArea)