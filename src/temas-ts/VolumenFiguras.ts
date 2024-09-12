import { Circulo, Pentagono, Rectangulo } from "./AreaFiguras.ts";

interface Cilindro {
    radio: number;
    altura: number;
}

interface PrismaPentagonal {
    lado: number;
    altura: number;
}

interface PrismaRectangular {
    base: number;
    altura: number;
    profundidad: number;
}

// Constantes
const PI = 3.141592653589793;
const TAN_ANGLE = 1 / Math.tan(PI / 5);

function calcularVolumenCilindro(cilindro: Cilindro): number {
    const { radio, altura } = cilindro;
    return PI * radio * radio * altura; 
}


function calcularVolumenPrismaPentagonal(prisma: PrismaPentagonal): number {
    const { lado, altura } = prisma;
    const areaBase = (5 / 4) * lado * lado * TAN_ANGLE; 
    return areaBase * altura;
}


function calcularVolumenPrismaRectangular(prisma: PrismaRectangular): number {
    const { base, altura, profundidad } = prisma;
    return base * altura * profundidad;


const cilindro: Cilindro = {
    radio: 5,
    altura: 10
};

const prismaPentagonal: PrismaPentagonal = {
    lado: 6,
    altura: 12
};

const prismaRectangular: PrismaRectangular = {
    base: 8,
    altura: 4,
    profundidad: 6
};

const volumenCilindro = calcularVolumenCilindro(cilindro);
const volumenPrismaPentagonal = calcularVolumenPrismaPentagonal(prismaPentagonal);
const volumenPrismaRectangular = calcularVolumenPrismaRectangular(prismaRectangular);

console.log(`Volumen del cilindro: ${volumenCilindro.toFixed(2)} cm³`);
console.log(`Volumen del prisma pentagonal: ${volumenPrismaPentagonal.toFixed(2)} cm³`);
console.log(`Volumen del prisma rectangular: ${volumenPrismaRectangular.toFixed(2)} cm³`);
