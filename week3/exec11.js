function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var deret = 0;
    var result = true;
    for(i=0;i < arr.length -1; i++){
        temp = arr[i+1] - arr[i];
        //console.log(temp);
        if(deret === 0){
            deret = temp;
        }else{
            if(deret !== temp){
                result = false;
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false