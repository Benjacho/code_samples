const entrada = "1 3 2"
const partido = entrada.split(" ");
const fnganador = (arr) => {
    let gatoA = parseInt(arr[0]), gatoB = parseInt(arr[1]), ratonC = parseInt(arr[2]);
    const dif1 = Math.abs(ratonC - gatoA)
    const dif2 = Math.abs(ratonC - gatoB)
    if (dif1 == dif2) {
        return "Raton C";
    } else if (dif1 > dif2) {
        return "Gato B";
    } else {
        return "Gato A";
    }
}
console.log(fnganador(partido))