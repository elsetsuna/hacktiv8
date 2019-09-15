function changeMe(arr) {
    var obj = {}
    if(arr.length === 0){
        console.log('""');
    }
    // you can only write your code here!
    for(i=0 ; i<arr.length ; i++){
        console.log(i+1 +". "+arr[i][0]+" "+arr[i][1])
        for(j=0 ; j < arr[i].length;j++){
            //console.log(arr[i][j])
            if(j === 0){
                obj["firstName"] = arr[i][j];
            }
            if(j === 1){
                obj["lastName"] = arr[i][j];
   
            }
            if(j === 2){
                obj["Gender"] = arr[i][j];

            }
            if(j === 3){
                //console.log(arr[i][j])
                    obj.age = 2019 - arr[i][j]
                //obj["age"] = arr[i][j+1];

            }
        }
        if(arr[i].length === 3){
            obj.age = "Tidak Lahir";
        }
        
        console.log(obj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""