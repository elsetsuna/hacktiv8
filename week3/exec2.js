function balikString(string){
    var word = "";
    for(var i= string.length - 1;i >= 0;i--){
        word = word+ string[i];
    }
    console.log(word);
}

balikString('string');