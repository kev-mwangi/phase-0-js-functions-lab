




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
function calculateTax(amount) {
    const tax =amount * 0.10;
    return tax;
}
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1,num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
function isPalindrome(word){
    let lowerWord = word.toLowerCase();
  let reversedWord = lowerWord.split('').reverse().join('');
  return lowerWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discount = originalPrice * (discountPercentage / 100);
    const finalPrice =originalPrice -discount;
    return finalPrice
}
console.log(calculateTax(200)); 
console.log(convertToUpperCase("hello")); 
console.log(findMaximum(10, 25)); 
console.log(isPalindrome("madam")); 
console.log(calculateDiscountedPrice(100, 20)); 