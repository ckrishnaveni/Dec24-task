let input=["one","two","six","one"];
let op="";
for(i=0;i<input.length;i++){
    op+=input[i][1] + ","
}
console.log(op);




let ip = ["one", "two", "three", "four"];
let output = [];
for (i = 0; i < ip.length; i++) {
    let reversed = "";
    for (let j = ip[i].length-1; j >= 0; j--) {
        reversed += ip[i][j];
    }
    output[i]=reversed
}
console.log(output);