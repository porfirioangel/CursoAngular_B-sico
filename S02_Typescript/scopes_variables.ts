let miVariable = "Inicial";

if (true) {
    // Esta variable solo existe en el bloque del if
    let miVariable = "Final";
}

console.log(miVariable);

const MI_CONSTANTE = "Inicial";

if (true) {
    // Pasa lo mismo con las constantes
    const MI_CONSTANTE = "Final";
}

console.log(MI_CONSTANTE);
