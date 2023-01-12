const express=require("express");
const app=new express();
const port=process.env.PORT || 8000;
const path=require("path");
//const spath=path.join(__dirname,"../public");
//console.log(spath);
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/in.html")
});

app.get("/weather",(req,res)=>{
    res.sendFile(__dirname + "/weather.html")
});



app.get("*",(req,res)=>{
    res.send('404 error page')
})

app.listen(port,()=>{
    console.log(`listening to ${port}`)
});