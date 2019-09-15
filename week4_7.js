function urutkanAbjad(str) {
  // you can only write your code here!
  var arr = [];
  for(i=0; i < str.length; i++){
    arr.push(str[i])
  }
  var temp = []
  for(i=0;i < arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i] < arr[j]){
            temp = arr[i]
            arr[i]=arr[j];
            arr[j] = temp;
        }
    }
  }

  console.log(arr.join());  
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'