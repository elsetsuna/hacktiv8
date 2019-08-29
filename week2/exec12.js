function konversiMenit(menit) {
  // you can only write your code here!
  var jam = "0";
  var mnt = "0";

  if(menit <60){
      mnt = menit;
  }else{
      for(menit;menit >=60;menit -=60){
          jam++;
            mnt = menit-60;
      }
  }
  if(mnt <10){
      mnt = "0"+mnt;
  }
  return jam+":"+mnt;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00