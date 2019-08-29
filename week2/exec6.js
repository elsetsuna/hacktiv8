// // 1. 
var word = "I Love coding";
var plus = 0
console.log("Looping Pertama");

while(plus < 20){
    plus += 2;
    console.log(plus +" - "+word);
}

var word2 = "I will become fullstack developer";
var minus = 20;

console.log("Looping Kedua");

while(minus > 1){
    console.log(minus +" - "+word2);
    minus -= 2;
}

// //2.
var word = "I Love coding";
var plus2 = 1;
console.log("Looping Pertama");
for(plus2;plus2 <=20;plus2++){
    console.log(plus2 +" - "+word);
}

var word2 = "I will become fullstack developer";
var minus2 = 20;

console.log("Looping Kedua");
for(minus2;minus2 >1;minus2--){
    console.log(minus2 +" - "+word2);
}

//.3

var angka =1;

while (angka < 100){
    if((angka % 2) === 0){
        console.log('GENAP');
    }else{
        console.log("GANJIL");
    }
    angka++;
    
}

for (var angka2 = 1; angka2 < 100; angka2 += 2) {
    if (angka2 % 3 === 0) {
        console.log(angka2 + ' Kelipatan 3');
    }
}

for (var angka3 = 1; angka3 < 100; angka3 += 5) {
    if (angka3 % 6 === 0) {
        console.log(angka3 + ' Kelipatan 6');
    }
}

for (var angka4 = 1; angka4 < 100; angka4 += 9) {
    if (angka4 % 10 === 0) {
        console.log(angka4 + ' Kelipatan 10');
    }
}