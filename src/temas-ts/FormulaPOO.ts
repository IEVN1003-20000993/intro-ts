class FormulaGeneral {
    num1: number;
    num2: number;
    num3: number;

    constructor(num1: number, num2: number, num3: number) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    public calcularRaices(): [number | string, number | string] {
        const discriminante = this.num2 ** 2 - 4 * this.num1 * this.num3;

        if (discriminante > 0) {
            const raiz1 = (-this.num2 + Math.sqrt(discriminante)) / (2 * this.num1);
            const raiz2 = (-this.num2 - Math.sqrt(discriminante)) / (2 * this.num1);
            return [raiz1, raiz2];
        } else if (discriminante === 0) {
            const raiz = -this.num2 / (2 * this.num1);
            return [raiz, raiz];
        } else {
            return ['No hay raíces reales', 'No hay raíces reales'];
        }
    }

    public imprimir(): void {
        const [raiz1, raiz2] = this.calcularRaices();
        console.log(`Ecuación: ${this.num1}x^2 + ${this.num2}x + ${this.num3} = 0`);
        if (typeof raiz1 === 'number' && typeof raiz2 === 'number') {
            console.log(`Raíces: ${raiz1} y ${raiz2}`);
        } else {
            console.log(`Raíces: ${raiz1}`);
        }
    }
}

const num1: number = 2;  
const num2: number = -4; 
const num3: number = -6;   

const ecuacion = new FormulaGeneral(num1, num2, num3);
ecuacion.imprimir();
