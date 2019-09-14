function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var price = 2000;
    var result = []
    var brkt = 0;
    var smpi = 0;

    if(arrPenumpang.length === 0){
        return [];
    }
    //your code here
    for(i=0;i<arrPenumpang.length;i++){
        //console.log(arrPenumpang[i])
        var obj = {}
        obj["penumpang"] = arrPenumpang[i][0];
        obj["naikDari"] = arrPenumpang[i][1];
        obj["tujuan"] = arrPenumpang[i][2];
        for(j=0;j <rute.length ; j++){
            if(rute[j] === arrPenumpang[i][1]){
                brkt = j;
            }else if(rute[j] === arrPenumpang[i][2]){
                smpi = j;
            }
        }
        obj["bayar"] = (smpi - brkt) * price;
        result.push(obj);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]