import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { saveStudent, updateSchoolToStudent } from "./ApiServices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export function AddStudent() {
    const [formData, setformData] = useState({});
    const navigate = useNavigate();
    const schoolID = useSelector((state) => state.schoolData.objId);
    const isLoggedin = useSelector((state) => state.schoolData.isLogeddin);
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const shouldSave = window.confirm("Are you sure you want to Register?");
        if (shouldSave) {
            try {
                console.log(formData);
                const response = await saveStudent(formData);
                // console.log(response.data._id);
                if (response) {
                    await updateSchoolToStudent(schoolID, response.data._id);
                    alert("Registered Student Data")
                    e.target.reset();
                    setformData({});

                }

            }
            catch (error) {
                console.log(error);
                alert("Network Problem Try Letter..")
            }

        }

    };
    return (

        <>
            <div className="mt-5">
                {isLoggedin ? (
                    <Container>

                        <Row>
                            <Col lg={4}></Col>
                            <Col lg={4}>
                                <Paper className="p-3">
                                    <h3>Register Student</h3>
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Name"
                                            name="name"
                                            type="text"
                                            required
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Class"
                                            name="class"
                                            type="text"
                                            required
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Rollnumber"
                                            name="rollnumber"
                                            type="text"
                                            required
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Section"
                                            name="section"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Gender(Male/Female)"
                                            name="gender"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Number"
                                            name="number"
                                            type="number"
                                            required
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            className="p-2 mt-1"
                                            fullWidth
                                            id="outlined-error"
                                            label="Enter Student Email(optional)"
                                            name="email"
                                            type="email"
                                            onChange={handleChange}
                                        />
                                        <Button type="submit" variant="contained" className="ms-2">Register</Button>
                                    </form>
                                </Paper>
                            </Col>
                            <Col lg={4}></Col>

                        </Row>
                    </Container>) : (
                    <div className="mt-5">
                        <h4 className="text-center mt-5">Please Login</h4>
                        <div className="text-center">
                            <Button variant="outlined" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}