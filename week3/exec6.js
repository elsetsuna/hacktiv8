function angkaPalindrome(num) {
    // you can only write your code here!
    num = num + 1
    while (true) {
        cekPalindrome = num === Number(num.toString().split('').reverse().join(''))
        if (cekPalindrome === false) {
            num = num + 1
        } else {
            return num
        }
    }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001