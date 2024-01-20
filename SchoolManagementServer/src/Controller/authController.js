import {  StatusCodes } from "http-status-codes";
import { schoolModel } from "../Schema/schoolSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function authLogin(req, res) {
      try 
      {
        const { schoolEmail, password } = req.body;
        const school = await schoolModel.findOne({ schoolEmail: schoolEmail }).populate("students").populate("teachers");
        if (school) {
            if (bcrypt.compareSync(password, school.password)) {
                // await users.populate('complaint');
                const token = jwt.sign({ schoolId: school._id }, 'sumit123');
                res.status(StatusCodes.OK).json({ 
                        token: token ,id:school._id,
                         teachers:school.teachers,
                         students:school.teachers

                    });
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json("Wrong Password..!");

            }
        }
        else{
              res.status(StatusCodes.BAD_REQUEST).json("School not found")
        }
   
        
      }
       catch (error)
       {
         console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
      }

}