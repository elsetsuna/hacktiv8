function xo(str) {
    // you can only write your code here!
    str2 = str.length;
    var count = 0;
var sio = 0;
var six = 0
while(count < str2){
    if(str[count] === "o"){
        sio++;
        //console.log("o"+sio)
    }else if(str[count] === "x"){
        six++;
        //console.log("x"+six);
    }
    count++;
}
if (sio === six){
    return true;
}else{
    return false;
}
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true