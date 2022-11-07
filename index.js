const express=require("express")

require("dotenv").config();

const app=express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello FRom the backend api")
})

app.about("/about",(req,res)=>{
    res.send("hello from about page")
})

const PORT=process.env.PORT || 8000

app.listen(PORT, async () => {
console.log(`running on port ${PORT}`)
})