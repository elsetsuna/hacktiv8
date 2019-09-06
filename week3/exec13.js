function targetTerdekat(arr) {
    // you can only write your code here!
    var o = 0;
    var x =[];
    var result = 0;
    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] === 'o'){
            o = i;
        }
        if(arr[i] === 'x'){
            x.push(i);
        }
    }
    for(j=0;j < x.length ; j++){
        if(o > x[j]){
            tmp = o - x[j];

        }else{
            tmp = x[j] - o;
        }
        //console.log(tmp);
        if(result === 0){
            result = tmp;
        }else{
            if(tmp < result){
                result = tmp;
            }
        }
    }
    return result;
    //console.log(o);
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2