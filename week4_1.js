function angkaPrima(angka) {
  // you can only write your code here!
  result = true;
  for(x=2;x <= angka - 1;x++){
      if(angka % x === 0){
          //console.log(angka%x);
        return false;
      }else{
          result = true;
      }
  }
  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false