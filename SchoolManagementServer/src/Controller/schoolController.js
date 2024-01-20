import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { schoolModel } from "../Schema/schoolSchema.js";
import { teacherModel } from "../Schema/teacherSchema.js";
import { studentModel } from "../Schema/studentSchema.js";

export async function saveSchoolData(req, res) {
    try {
        const { schoolName, schoolCode, schoolEmail, password } = req.body;
        const existingSchool = await schoolModel.findOne({ schoolCode });
        if (existingSchool) {
            return res.status(StatusCodes.CONFLICT).json({ error: "School with this code already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSchool = new schoolModel({
            schoolName,
            schoolCode,
            schoolEmail,
            password: hashedPassword,
        });
        await newSchool.save();
        res.status(StatusCodes.CREATED).json({ message: "School data saved successfully" });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
}

export async function getSchoolData(req,res)
{
    try 
    {
        const response = await schoolModel.find()
                         .populate("students")
                        .populate("teachers");
        res.status(StatusCodes.OK).json(response)
        
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

//saveStudent data
export async function saveStudentData(req,res){
       try 
       {
           const data =new studentModel(req.body);
           const response = await data.save();
           res.status(StatusCodes.CREATED).json(response);

       }
        catch (error) 
        {
           console.log(error);
           res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error});
       }
}

//updateStudentData to School
export async function updateStudenttoSchool(req,res)
{
    try
     {
          await schoolModel.findByIdAndUpdate(req.params.id,{$push:{students:req.params.obj}});
          await schoolModel.findByIdAndUpdate(req.params.obj,{school:req.params.id});
          res.status(StatusCodes.OK).json("update TeachersData");
        
    } 
    catch (error) 
    {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error});      
    }
}


//saveTeacherdata
export async function saveTeacherData(req,res){
    try 
    {
        const data =new teacherModel(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);

    }
     catch (error) 
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error});
    }
}

//updateTeacherData to School
export async function updateTeachertoSchool(req,res)
{
 try
  {
       await schoolModel.findByIdAndUpdate(req.params.id,{$push:{teachers:req.params.obj}});
       await studentModel.findByIdAndUpdate(req.params.obj,{school:req.params.id})
       res.status(StatusCodes.OK).json("update TeachersData");
     
 } 
 catch (error) 
 {
     console.log(error);
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error});      
 }
}
//deletestudent data
export async function deleteStudent(req, res) {
    try {
        const schoolId = req.params.id;
        const studentId = req.params.obj;
        await studentModel.findByIdAndDelete(studentId);
        await schoolModel.findByIdAndUpdate(schoolId, { $pull: { students: studentId } });
        res.status(StatusCodes.OK).json("Student deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}
//deleteteacherData
export async function deleteTeacher(req, res) {
    try {
        const schoolId = req.params.id;
        const teacherId = req.params.obj;
        await teacherModel.findByIdAndDelete(teacherId);
        await schoolModel.findByIdAndUpdate(schoolId, { $pull: { teachers: teacherId } });
        res.status(StatusCodes.OK).json("Teacher deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}
