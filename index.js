function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = "";
    for (i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str===reversedStr;
}
let userInput = prompt("Enter a string to check if its a palindrome:");
if(userInput){
if(isPalindrome(userInput)){
    alert("Yes, Entered string is a palindrome");
}
else{
    alert("No, Entered string is not a palindrome")
}
}
else{
    alert("You didn't enter anything")
}


let input = ["one", "two", "six", "one"];
let op = "";
for (i = 0; i < input.length; i++) {
    op += input[i][1] + ","
}
console.log(op);

let ip = ["one", "two", "three", "four"];
let output = [];
for (i = 0; i < ip.length; i++) {
    let reversed = "";
    for (let j = ip[i].length - 1; j >= 0; j--) {
        reversed += ip[i][j];
    }
    output[i] = reversed
}
console.log(output);