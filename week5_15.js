function kaliTerusRekursif(angka) {
  // you can only write your code here!
  angka2 = angka.toString()

  if(angka < 10){
      return angka
  }else{
      var all = 1;
      for(i=0;i < angka2.length ; i++){
        all = all * Number(angka2[i]);
      }
      return kaliTerusRekursif(all)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6