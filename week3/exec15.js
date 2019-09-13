function groupAnimals(arr) {
    arr.sort()
    var result = []
    var temp = []
    for(var i = 0; i < arr.length; i++) {
      temp.push(arr[i])
      if(arr[i+1]) {
        if(arr[i+1][0] !== arr[i][0]) {
          result.push(temp)
          temp = []
        }
      } else {
        result.push(temp)
      }
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]