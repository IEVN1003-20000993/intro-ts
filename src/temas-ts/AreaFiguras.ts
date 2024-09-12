interface Circulo {
    radio: number;
}

interface Pentagono {
    lado: number;
}

interface Rectangulo {
    base: number;
    altura: number;
}

// Constantes
const PI = 3.1416;
const TAN_ANGLE = 1 / Math.tan(PI / 5);

function calcularAreaCirculo(circulo: Circulo): number {
    const { radio } = circulo;
    return PI * radio * radio; 
}

function calcularAreaPentagono(pentagono: Pentagono): number {
    const { lado } = pentagono;
    return (5 / 4) * lado * lado * TAN_ANGLE; 
}


function calcularAreaRectangulo(rectangulo: Rectangulo): number {
    const { base, altura } = rectangulo;
    return base * altura; 
}

const circulo: Circulo = {
    radio: 5
};

const pentagono: Pentagono = {
    lado: 6
};

const rectangulo: Rectangulo = {
    base: 8,
    altura: 4
};

const areaCirculo = calcularAreaCirculo(circulo);
const areaPentagono = calcularAreaPentagono(pentagono);
const areaRectangulo = calcularAreaRectangulo(rectangulo);

console.log(`Área del círculo es: ${areaCirculo.toFixed(2)} cm²`);
console.log(`Área del pentágono es: ${areaPentagono.toFixed(2)} cm²`);
console.log(`Área del rectángulo es: ${areaRectangulo.toFixed(2)} cm²`);
