const express= require('express');
const {chats}=require("./data/data")
const dotenv= require("express")
const app= express()

app.get("/", (req, res)=>{
    res.send("api is running")
})

app.get('/api/chat',(req, res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req, res)=>{
    // res.send(req.params.id);
    const singleChats=chats.find((c)=>c._id === req.params.id)
    res.send(singleChats)
})

const PORT= process.env.PORT || 5000;

app.listen(5000,console.log(`server started on port ${PORT}`))
