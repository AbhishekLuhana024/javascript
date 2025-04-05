// write node js script to fetch values fromm url given below:
// http://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=WelcometoLJU#Allthebest
// data must be written as below in file named exam.txt, file name must be fetch from the url given above
// output: Hello!
// Welcome to LJU FSD2 T1 Test
// #All the best
// read content from file and send response to server and display data in "/" page in same format as above but in h1 tag and in red color
// if any other page is requested it shows page not found in plain text

const http=require("http");
const fs=require("fs");
const url=require("url");
const url1='http://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=WelcometoLJU#Allthebest';
purl=url.parse(url1,true);
const c1=purl.query.c1;
const c2=purl.query.c2;
const c3=purl.query.c3;
const hash=purl.hash;
const filename="."+purl.pathname;
const filecontent=c1+"!\n"+c3+" "+c2+"\n"+hash;
fs.writeFileSync(filename, filecontent);
const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        data=fs.readFileSync(filename,"utf-8");
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1 style='color:red'><pre>"+data+"</pre></h1>")
    }
    else
    {
        res.writeHead(400,{'content-type':'text/html'});
        res.end("page not found")
    }
});
server.listen(6051);