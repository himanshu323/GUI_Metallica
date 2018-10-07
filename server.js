const express=require("express");
const path=require("path")

let app=express();

app.use(express.static(path.join(__dirname,"dist","metallica-app")))


app.get("/*",(req,resp)=>{

    resp.sendFile(path.join(__dirname,"dist","metallica-app","index.html"))
})

app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server started`)
})