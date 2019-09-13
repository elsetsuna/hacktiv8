/*
===============
MajoritySweeper
===============

[INSTRUCTIONS]
MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
sering muncul (mayoritas) dari daftar nilai array 

[EXAMPLE]
INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

INPUT: [22, 22, 100, 100, 100, 2000]
OUTPUT: [22, 22, 2000]

INPUT: [2, 2]
OUTPUT: []

INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
OUTPUT: [1, 1, 1, 2, 2]

[RULE]
- Hanya boleh menggunakan for/ while loop, if -else, serta fungsi array pada javascript
- dilarang menggunakan fungsi es6
*/

function MajoritySweeper(arr) {
    var banyak = 0;//1
    var count = 0;//1
    var curangka = 0;//9//1
    var bigangka = 0;//9
for(i=0;i < arr.length ; i++){
    //console.log(i);
    if(i === 0){
        curangka = arr[i];
        bigangka = arr[i];
        //console.log("curangka"+curangka);
        count++
    }else{
        if(curangka === arr[i]){
            //console.log(curangka);
            //console.log("cek"+arr[i]);
            count++;
            //console.log("c"+count);
            if(count > banyak){
                banyak = count;
                bigangka = curangka;
            }
        }else{
            if(count > banyak){
                banyak = count;
                count = 1;
                bigangka = curangka;
                curangka = arr[i];
            }else{
                curangka = arr[i];
                count = 1;
            }
        }

        }
        //console.log('a'+count);
}
//console.log(banyak);
for(i=0;i < arr.length ; i++){
    //console.log(i);
    if( arr[i] === bigangka){
        arr.splice(i,banyak);
        console.log(arr);
        break;
    }
}
return arr;
//onsole.log(bigangka);
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]