//create array
var arr =[]
arr.push(0)

//create object
var obj = {}
obj["nama"] = "Jody"

//create array of objects
arr.push(obj)

//read array
console.log(arr[1].nama)

//read objct
var objBaru = {
	nama: "Titan",
	age:20,
	profesi: "Student"
}
console.log(objBaru.nama)
console.log(objBaru["profesi"])

//read object dalam array
console.log(arr[1].nama)

//update array
var objMurid4 = {nama : "Andi",umur : 20,hobby:["ngoding"]}
arrMurid[1] = objMurid4
console.log(arrMurid)

//update object
objMurid4.hobby.push("belanja")
console.log(objMurid4)

