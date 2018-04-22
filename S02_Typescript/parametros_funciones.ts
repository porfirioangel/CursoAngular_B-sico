/**
- quien: parámetro obligatorio
- cosa: parámetro opcional con valor por default
- momento: parámetro opcional
*/
function activar(quien:string, cosa:string = "batiseñal", momento?:string) {
    let mensaje:string;

    if (momento) {
        mensaje = `${ quien } activó la ${ cosa } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activó la ${ cosa }`;
    }

    console.log(mensaje);
}

activar("Memo");
activar("Pedro", "Comida");
activar ("Mario", "Cena", "Noche");
