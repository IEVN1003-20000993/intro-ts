interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const alumno:Alumno={ //aqui esta el objeto aqui se crea una instancia
    nombre:'Alberto',
    edad:21,
    email: 'ptisa@gmail.com'

}

console.table(alumno);

let mascotas=['perro', ' gato', 'perico']
mascotas[1]='Nuevo gato'
mascotas.push('leon')
console.log(mascotas);

let tem:(string|number)[]=[]
tem.push(11);
tem.push('hola');
console.log(tem);