// read data from file and arrange that data in ascending order

var f1=require("fs");
f1.writeFileSync("demo.txt", "50 -1 99 100 20 0 56 78 59");
data=f1.readFileSync("demo.txt", "UTF-8");
console.log(data)
data=data.split(" ");
d=data.sort((a,b)=>a-b);
console.log(d)