function kaliTerusRekursif(angka) {
  // you can only write your code here!
  angka2 = angka.toString();
    angkasisa = angka2.slice(1,angka2.length)
  if( angka2 < 10){
      return angka                                                                                                                                                                                                                                                                                                                                                   
  }else{
      return Number(angka2[0]) * kaliTerusRekursif(Number(angkasisa))
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6