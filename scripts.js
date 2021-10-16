const Binario = document.getElementById('inputBinario')
const Decimal = document.getElementById('inputDecimal')

const bin2dec = input => parseInt(input,2)

const dec2bin = input => {
    let aux = input
    let i = 0
    let binary = 0
    const j = Math.ceil(Math.log2(input))

    for (i = 0; i < j; i++){
        binary += (aux % 2)*(10**i)
        console.log(aux)
        aux = Math.floor(aux/2)
    }
    return binary
}

function tryConvert() {
    if (Binario.value != "")  Decimal.value = bin2dec(Binario.value)
    else Binario.value = dec2bin(Decimal.value)
}

function clearDec() {
    Decimal.value = ""
}

function clearBin() {
    Binario.value = ""
}
