import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
       name:{
         type:String,
         required:true
       },
       number:{
          type:String,
          required:true,
       },
       email:{
          type:String,
          required:true
       },
       class:{
         type:String,
         required:true
       },
       rollnumber:{
        type:String,
        required:true
       },
       section:{
        type:String,
        required:true
       },
      gender:{
        type:String
      },
       school:{type:mongoose.Schema.Types.ObjectId, ref:"schoolModel"}
})
export const studentModel = new mongoose.model("studentModel",studentSchema);