f1=require("fs");
f1.writeFile("test.txt","hi",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("written");
    }
});
f1.appendFile("test.txt", "how are you?",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("appended");
    }
});
f1.readFile("test.txt","utf-8",(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});
f1.rename("test.txt","t2.txt",()=>
{
    console.log("renamed");
});

f1.unlink("test.txt",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("deleted");
    }
});