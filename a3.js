// write a node js script that asynchronously write data to a file named test1.js, if no error occurs during the writing process the script should 
// then append additional data to the same file, finally it should read the content of the file including the newly written and appended data and
// display it on console

f2=require("fs");
f2.writeFile("test1.txt","hello",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        f2.appendFile("test1.txt", "good morning",(err)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                f2.readFile("test1.txt","utf-8",(err,data)=>
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
            }
        });
    }
});

