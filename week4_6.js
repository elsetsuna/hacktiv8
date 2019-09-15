function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var kali = [];

  for(i = 1; i <= angka; i++){
      if(angka % i === 0 ){
        kali.push(i);
      }
  }
  //console.log(kali);
var counter = 0;
  for(j = 0 ; j < kali.length / 2 ; j++ ){
      var minus = kali.length - (j+1)
      var arr = [];
      str1 = kali[j].toString();
      str2 = kali[minus].toString()
      totalstr = str1.length + str2.length;
        //console.log(str1+"-"+str2+"="+totalstr);
    if(counter === 0){
        counter = totalstr;
    }else{
        if(totalstr < counter){
            counter = totalstr;
        }
    }
    //count = kali[0].length + kali[kali.length - (j+1)]
    //console.log(kali[0].length );
  }
  return counter;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
