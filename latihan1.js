function convertObject(items){
    var result = {}
for(i=0;i < items.length ; i++){
    if(!result[items[i].name]){
        result[items[i].name] = items[i].price
    }else{
        console.log(result[items[i].name]);

    }
    
}
//console.log(result);
console.log(result);
}

console.log(convertObject([
    { name: 'Iphone 11',price:999},
    { name: 'Iphone 11 Pro',price:9199},
    { name: 'Iphone 11',price:2999},
]))