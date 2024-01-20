import mongoose from "mongoose";

const teacherSchema =new  mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        number:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        joiningDate:{
             type:String,
             required:true
        },
        qualification:{
            type:String,
            required:true
        },
        subject:{
             type:String,
             required:true
        },
        school:{type:mongoose.Schema.Types.ObjectId, ref:"schoolModel"}
})
export const teacherModel = new mongoose.model("teacherModel",teacherSchema)