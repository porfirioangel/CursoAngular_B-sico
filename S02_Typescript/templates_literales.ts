let nombre2:string = "Porfirio";
let apellido:string = "Díaz";
let edad:number = 21;
let texto:string = `Hola ${ nombre2 } ${ apellido } (${ edad })`;
let texto2:string = `Hola ${ 1 + 2 } ${ getNombre() }`

function getNombre() {
    return "Memo"
}

console.log(texto);
console.log(texto2);
