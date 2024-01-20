import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
       schoolName:{
            type:String,
            required:true
       },
       schoolCode:{
          type:String,
          required:true
       },
       schoolEmail:{
          type:String,
          required:true
       },
       password:{
          type:String,
          required:true
       },
       teachers:[{type:mongoose.Schema.Types.ObjectId, ref:"teacherModel"}],
       students:[{type:mongoose.Schema.Types.ObjectId, ref:"studentModel"}]
})

export const schoolModel = new mongoose.model("schoolModel",schoolSchema);