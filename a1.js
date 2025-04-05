var fs=require("fs");
fs.writeFileSync("test.txt", "hello");
console.log("completed");
console.log("test")
fs.writeFile("test.txt", "hi", function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("completed");
    }
});