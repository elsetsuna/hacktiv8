function pasanganTerbesar(num) {
    // you can only write your code here!
    var pasanganTerbesar = 0
    var angkaPasangan = []
    numString = String(num)

    for (var i = 0; i < numString.length - 1; i++) {
        //console.log(numString[i] + numString[i + 1]);
        if (numString[i] + numString[i + 1] > pasanganTerbesar) {
            pasanganTerbesar = numString[i] + numString[i + 1]
            
        }
    }
    // console.log(angkaPasangan)
    return pasanganTerbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99