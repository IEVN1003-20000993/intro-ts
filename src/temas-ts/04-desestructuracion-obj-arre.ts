
interface Reproductor{
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volume:50,
    segundo:10,
    cancion:"el triste",
    detalles:{
        autor:"Lol",
        year:2023
    }
}

console.log(`The actual volume is: ${reproductor.volume}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`The actual volume is: ${reproductor.detalles.year}`);

const{volume,segundo,cancion,detalles}=reproductor;
const{autor,year}=detalles;

console.log(`The actual volume is: $volume}`);
console.log(`Los segundos son: $segundo}`);
console.log(`La cancion es: $cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`The actual volume is: ${year}`);

const dbz:string[]=['Goku','Goten','Broly','Trunks']

console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);
