function countProfit(shoppers) {
    if(shoppers.length === 0){
        return "asd";
    }
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
    var buyer=[[],[],[]]
    var profit = [0,0,0];


    for(i=0; i<shoppers.length ; i++){
        if(shoppers[i].product === "Sepatu Stacattu"){
            if(listBarang[0][2] >= shoppers[i].amount){
                buyer[0].push(shoppers[i].name);
                //console.log(listBarang[0][2]);
                listBarang[0][2] = listBarang[0][2] - shoppers[i].amount
                profit[0] += listBarang[0][1] * shoppers[i].amount
            }
            //console.log(profit[0]);
        }else if(shoppers[i].product === "Baju Zoro"){
            if(listBarang[1][2] >= shoppers[i].amount){
                buyer[1].push(shoppers[i].name);
                listBarang[1][2] = listBarang[1][2] - shoppers[i].amount
                profit[1] += listBarang[1][1] * shoppers[i].amount
            }
            //console.log(profit[1]);
        }else if(shoppers[i].product === "Sweater Uniklooh"){
            if(listBarang[2][2] >= shoppers[i].amount){
                buyer[2].push(shoppers[i].name);
            listBarang[2][2] = listBarang[2][2] - shoppers[i].amount
            profit[2] += listBarang[2][1] * shoppers[i].amount
            }
            //console.log(profit[2]);
        }
    }
    //console.log(profit);
    //console.log(profit);
    var result = []

    for(i=0; i < listBarang.length ; i++){
        var obj = {}
        obj["product"] = listBarang[i][0];
        obj["shoppers"] = buyer[i];
        obj["leftOver"] = listBarang[i][2];
        obj["totalProfit"] = profit[i];
        //console.log(buyer[i])
        //return obj;
        result.push(obj);
    }
    //console.log(obj)
    return result;
  // you can only write your code here!
}

// TEST CASES
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
//console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]