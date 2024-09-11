interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Sony Ericsson',
    precio: 500
};

const tablet: Producto = {
    desc: 'Samsung',
    precio: 724
};

function calcularIVA(productos: Producto[]): number {
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    });
    return total * 0.16;
}

const articulo1 = [telefono, tablet];
const IVA1 = calcularIVA(articulo1);
console.log(`IVA: ${IVA1}`);

function calcularIVA2(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.16];
}

const articulo2 = [telefono, tablet];
const [total2, iVA2] = calcularIVA2(articulo2);
console.log('PRODUCTO 2 IVA 2');
console.log(`Total: ${total2}`);
console.log(`IVA: ${iVA2}`);