function ubahHuruf(kata) {
    // you can only write your code here!
    var newword = "";
    for(i=0;i < kata.length ; i++){
        var temp = kata.charCodeAt(i);
        if(temp === 122 || temp === 90){
            var newchar = String.fromCharCode(temp-25);
        }else{
            var newchar = String.fromCharCode(temp+1);
        }
        //newword.push()
        //console.log(newchar);
        newword = newword+newchar;
    }
    return newword;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu