class Persona3{
    protected nombre:string; 
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo=sueldo;
    }
    imprimir(): void{
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagarImpuesto(){
        if(this.sueldo>5000)
            console.log(`${this.nombre} debes pagar impuestos NOW`)
        else
        console.log(`${this.nombre} no debes pagar impuestos`)
    }
}
const persona3=new Persona3('Dami', 44)
persona3.imprimir()

const empleado1=new Empleado('Dul', 44, 4000)
empleado1.imprimir()
empleado1.pagarImpuesto()
