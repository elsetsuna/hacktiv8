function changeVocals (str) {
  //code di sini
  var result = ""
  for(i=0 ; i < str.length ; i++){
    if(str[i] === "a"){
        result += "b"
    }else if(str[i] === "e"){
        result += "f"
    }else if(str[i] === "i"){
        result += "j"
    }else if(str[i] === "o"){
        result += "p"
    }else if(str[i] === "u"){
        result += "v"
    }else if(str[i] === "A"){
        result += "B"
    }else if(str[i] === "E"){
        result += "F"
    }else if(str[i] === "I"){
        result += "J"
    }else if(str[i] === "O"){
        result += "P"
    }else if(str[i] === "U"){
        result += "V"
    }else{
        result += str[i]
    }
  }
  return result
}

function reverseWord (str) {

  var result = ""
    for(i = str.length -1; i >= 0 ; i--){
      result += str[i]
    }
  //code di sini
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  var result = ""
  for(i=0;i < str.length ; i++){
    if(str[i] === str[i].toLowerCase()){
      result += str[i].toUpperCase()
    }else{
      result += str[i].toLowerCase()
    }
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  var result = ""
  for(i=0;i < str.length ; i++){
    if( str[i] !== " "){
      result += str[i]
    }
  }
  return result
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  //code di sini
  cv = changeVocals(name)
  rw = reverseWord(cv)
  luc = setLowerUpperCase(rw)
  rs = removeSpaces(luc)

  return rs
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'