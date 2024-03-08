const express = require("express");
require("../src/db/conn")

const Tasks = require("../src/models/tasks")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//post request
app.post("/tasks",async(req,res) =>{
    try{
        const addingtasksrecord = new Tasks(req.body)
        console.log(req.body);
        const inserttasks = await addingtasksrecord.save();
        res.status(200).send(inserttasks);
    }catch(e){
        res.status(400).send(e);
    }
})

//get request
app.get("/tasks",async(req,res) =>{
    try{
        const gettasks = await Tasks.find({});
        res.status(200).send(gettasks);
    }catch(e){
        res.status(400).send(e);
    }
})

//get request by id
app.get("/tasks/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const gettasksid = await Tasks.findById({_id}).sort({"task_title":"Task 1"});
        res.status(200).send(gettasksid);
    }catch(e){
        res.status(400).send(e);
    }
})

//for updating using patch
app.patch("/tasks/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const gettasksid = await Tasks.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(gettasksid);
    }catch(e){
        res.status(500).send(e);
    }
})

//for delete using delete
app.delete("/tasks/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const gettasksid = await Tasks.findByIdAndDelete(req.params.id);
        res.send(gettasksid);
    }catch(e){
        res.status(500).send(e);
    }
})

app.get("/",async(req,res) => {
    res.send("Hello Divyani");
})
app.listen(port,() => {
    console.log(`Connection is live at port ${port}`);
})