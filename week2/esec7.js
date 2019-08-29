// 1

var rows = 5

for (var i = 0; i < rows; i++) {
    console.log('*');
}

// 2

var rows2 = 5
var result = ''

for (var i = 0; i < rows2; i++) {
    result = '';
    for (var j = 0; j < rows2; j++) {
        result += '*'
    }
    console.log(result)
}

// 3

var rows3 = 5
var result2 = ''

for (var i = 0; i < rows3; i++) {
    result2 = ''
    for (var j = 0; j <= i; j++) {
        result2 += '*'
    }
    console.log(result2)
}