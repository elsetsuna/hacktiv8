function checkAB(num) {
    // you can only write your code here!
    //num = num.split(' ').join('')
    // console.log(num);
    var a =[];
    var b =[];
    for(i=0; i < num.length ; i++){
        if(num[i] === "a"){
            a.push(i)
        }
        if(num[i] === "b"){
            b.push(i)
        }
    }
    // console.log(a);
    // console.log(b);
    var tmp = 0;
    var jarak = 0;
    var count = 0;
    if(a.length >= 1 && b.length >= 1){
        for(i=0;i < a.length; i++){
            for(j=0;j <b.length;j++){
                if(a[i] >  b[j]){
                    tmp = a[i] - b[j];

                }else{
                    tmp = b[j] - a[i];
                }
                //console.log(tmp)
                if(tmp === 4){
                    count++
                }
            }
        }
        //console.log(count);
        if(count >= 1){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
   console.log(checkAB('bacon and meat')); // false