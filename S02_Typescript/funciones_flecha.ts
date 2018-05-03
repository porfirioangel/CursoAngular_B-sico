// Equivalencias de funciones normales a funciones de flecha

let funcionNormal1 = function(a:any) {
    return a;
}

let funcionFlecha1 = (a:any) => a;

let funcionNormal2 = function(a:number, b:number) {
    return a + b;
}

let funcionFlecha2 = (a:number, b:number) => a + b;

let funcionNormal3 = function(nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let funcionFlecha3 = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log(funcionNormal1('hola'));
console.log(funcionFlecha1('hola'));
console.log(funcionNormal2(1, 2));
console.log(funcionFlecha2(1, 2));
console.log(funcionNormal3('porfirio'));
console.log(funcionFlecha3('porfirio'));

// Usos donde las funciones de flecha resuelven problemas que ocurren con las
// funciones normales

let hulkNormal = {
    nombre: 'Hulk',
    smash() {
        setTimeout(function() {
            // this.nombre será undefined porque this apunta al objeto global
            // que es window, donde nombre no existe
            console.log(this.nombre + ' smash!');
        }, 500)
    }
}

hulkNormal.smash();

let hulkFlecha = {
    nombre: 'Hulk',
    smash() {
        // this.nombre será Hulk porque con las funciones de flecha el this
        // no se ve afectado cuando se ejecuta dentro de otra función
        setTimeout(() => console.log(this.nombre + ' smash!'), 500);
    }
}
