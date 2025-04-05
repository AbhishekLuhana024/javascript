const message=function() {
    console.log("after 3 sec");
}
setTimeout(message,3000)

setTimeout(function() {
    console.log("direct function");
}, 5000)

setTimeout(()=>
{
    console.log("arrow");
},1000)