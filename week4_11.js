function shoppingTime(memberId, money) {
  // you can only write your code here!
  var result = {}
  var itemPrice = [['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweeter Uniklooh',175000],['Casing Handphone',50000]];
  var countItem = [0,0,0,0,0];
  if(memberId === ""){
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  if(money < 50000){
      return "Mohon maaf, uang tidak cukup";
  }
  if(memberId === undefined && money === undefined){
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  result["memberId"] = memberId;
  result["money"] = money
  var sisaUang = 0;
  for(i=0;i <itemPrice.length;i++){
      //console.log(itemPrice[i][1]);
      if(money >= itemPrice[i][1] && countItem[i] === 0){
          money -= itemPrice[i][1]
          countItem[i] = 1;
      }
  }
  var purchaseList = []
  for(i=0;i < countItem.length; i++){
      if(countItem[i] === 1){
          purchaseList.push(itemPrice[i][0]);
      }
  }
  result["listPurchased"] = purchaseList;
  result["changeMoney"] = money;
return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja