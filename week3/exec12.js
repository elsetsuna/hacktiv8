function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var deret = 0;
    var result = true;
    for(i=0;i < arr.length -1 ; i++){
        temp = arr[i+1] / arr[i];
        //console.log(temp);

        if(i === 0){
            deret = temp;
        }else{
            if(deret !== temp){
                result = false;
            }
        }
        //console.log(deret);
    }
    return result;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false