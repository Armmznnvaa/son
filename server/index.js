let express=require('express')
let app=express()
let cors=require("cors")
app.use(cors())
let bodyParser=require("body-parser")
app.use(bodyParser.json())
let mongoose=require("mongoose")
let {Schema}=require("mongoose")
require("dotenv").config()
let port=process.env.PORT;


let sonSchema=new Schema({
    name:String,
    desc:String,
    price:Number,
    img:String
})

let Son = mongoose.model("son",sonSchema)


app.get("/api/son",async(req,res)=>{
    let sonfin=await Son.find()
    if (sonfin.length>0) {
        res.send(sonfin)
        
    }
    else{
        res.send("data not found")
    }
})
app.get("/api/son/:id",async(req,res)=>{
    let {id}=req.params
    let finded=await Son.findById(id)
    if (finded) {
        res.send(finded)
        
    }
    else{
        res.send("data not found")
    }
})


app.delete("/api/son/:id",async(req,res)=>{
    let {id}=req.params
    let deleted= await Son.findByIdAndDelete(id)
    if (deleted) {
        res.send(deleted)
        
    } else {
        res.send("data not found")
        
    }
})
app.post("/api/son",async(req,res)=>{
    let{name,desc,price,img}=req.body
    let newData={}
    if (name) {
        
        newData.name=name
    }
    if (desc) {
        
        newData.desc=desc
    }
    if (name) {
        
        newData.price=price
    }
    if (name) {
        
        newData.img=img
    }

    let sonnew= await Son(newData)
    let savenew=await sonnew.save()
    res.send(savenew)
})
app.listen(port,()=>{
    console.log(`example listening on port ${port}`)
})
mongoose.connect('mongodb+srv://aydan:aydan123@app.5ibbxcd.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("CONNECT!!!!!!!"))