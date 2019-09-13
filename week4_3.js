function cariMedian(arr) {
  // you can only write your code here!
    //console.log(arr.length);
  if(arr.length % 2 === 0){
    x = arr.length / 2;
    result = (arr[x-1]+arr[x]) /2;
  }else{
      x = Math.round(arr.length / 2);
    result = arr[x-1];
  }
return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5