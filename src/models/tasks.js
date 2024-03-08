const express = require("express");
const mongoose  = require("mongoose");

const taskSchema = new mongoose.Schema({
    task_title:{
        type:String,
        required:true,
        unique:true
    },
    task_des:{
        type:String,
        required:true,
        unique:true
    }
}
)
//creating for collection
const Tasks = new mongoose.model("Tasks",taskSchema)

module.exports = Tasks;