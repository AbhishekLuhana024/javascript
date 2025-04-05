// write a node js script to copy the content of one file to another file, data should be fetched from source.txt and insert into destination.txt and print data on console from destination.txt file

var f1=require("fs");
f1.writeFileSync("source.txt", "Hello, how are you?");
var f2=require("fs");
data=f1.readFileSync("source.txt")
f2.writeFileSync("destination.txt", data);
data1=f2.readFileSync("destination.txt");
console.log(data1)
console.log(data.toString())