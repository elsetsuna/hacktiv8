function fpb(angka1, angka2) {
    var a1 = [];
    var a2 = [];
    var fpb = 0;
    // you can only write your code here!
    for(i = 1;i <= angka1;i++){
        if( angka1 % i === 0){
            //console.log(i);
            a1.push(i);
        }
    }
    for(i = 1;i <= angka2;i++){
        if( angka2 % i === 0){
            //console.log(i);

            for(j=0;j < a1.length; j++){
                if(i === a1[j]){
                    fpb = i;
                }
            }
        }
    }
    return fpb;
    //console.log(a1);
    //console.log(a2);

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1