import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AdminSigin } from "./ApiServices";
import { login, objId, siginData } from "./Slice/schoolSlice";

export function AdminLogin()
{
    const [formData,setformData]=useState({});
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handlechange =(e)=>{
           setformData(
            {...formData,[e.target.name]:e.target.value}
        );

    }
    const handleSubmit=async (e)=>{
           e.preventDefault();
           try {
            const response= await AdminSigin(formData)
            if(response.data.token){  
                 alert("Sigin SuccessFully")
                 dispatch(login());
                 dispatch(objId(response.data.id));
                 dispatch(siginData(formData))
                 e.target.reset();
                 navigate("/");
            }
            else{
                 alert("wrong number and password")
            } 
           }
           catch(error){
            console.log(error);
               
            alert("Network Problem")
            
           }      

    }
    return(
        <>
             <Container className="d-flex justify-content-center" style={{ position: "relative", top: 100 }}>  
                   <Paper elevation={6} className="p-3">
                       <h4 className="ms-3">Admin-Login</h4>
                           <form onSubmit={handleSubmit}>
                           <TextField
                                className="p-2 mt-1"                   
                                 style={{width:"250px"}}
                                 id="outlined-error"
                                 label="Email"
                                 name="schoolEmail"
                                 type="email"
                                  onChange={handlechange}
                             /><br></br>
                              <TextField
                                 className="p-2 mt-1"
                                 style={{width:"250px"}}
                                 
                                 id="outlined-error"
                                 label="Password"
                                 name="password"
                                 type="password"
                                  onChange={handlechange}
                             /><br></br>
                             <Button type="submit" fullWidth variant="contained">Login</Button>      
                           </form>    
                   </Paper>
             </Container>
         
        
        
        </>
    )
}