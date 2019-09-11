function cariModus(arr) {
    // you can only write your code here!
    var counter = [];
    var diff = true;
    var same = false;
    for(i=0;i < arr.length ; i++){
        var count = 0;
        for(j=0;j<arr.length;j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if(count  > 1){
            diff = false;
        }
        if(count === arr.length){
            same = true;
        }
        counter.push(count);
    }
    //console.log(counter);
        var bigcounter = 0;
        var bigindex = 0;
    for(i = 0 ; i < counter.length ; i++){
        if( counter[i] > bigcounter){
            bigcounter = counter[i];
            bigindex = i;
        }
    }
    //console.log(same);
if(diff === true){
    return -1
}else if( same === true){
    return -1
}else{
    return arr[bigindex];
}

}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1