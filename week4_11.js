function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(memberId === undefined || memberId.length === 0){
        return " Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if(money < 150000){
        return "Mohon maaf, uang tidak cukup"
    }
    var result = {}
    var list = [["Sepatu Stacattu",1500000],["Baju Zoro",500000],["Baju H&N",250000],["Sweater Uniklooh",175000],["Casing Handphone",50000]]
    var buylist = []
    var change = money
    for(i = 0; i < list.length ; i++){
        if(money >= list[i][1]){
            buylist.push(list[i][0])
            change -= list[i][1]
        }
    }
    result["memberId"] = memberId
    result["money"] = money
    result["listPurchased"] = buylist
    result["changeMoney"] = change

    return result
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
