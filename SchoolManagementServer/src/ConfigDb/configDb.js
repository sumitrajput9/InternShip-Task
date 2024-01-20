import mongoose from "mongoose";
export async function configDb()
{
    try 
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/SchoolmanagementDb')
        console.log("DB Connected..");
        
    } 
    catch (error) 
    {
        console.log(error);
        
    }
}
