import { CardMedia, Paper } from "@mui/material";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
const studentimg = new URL("../AllImages/student.jpeg", import.meta.url)
const teacherimg = new URL("../AllImages/teachers.png", import.meta.url)
export function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="mt-5">
                <Container className="d-flex justify-content-center">
                    <div className="mt-4">
                        <Paper elevation={2} className="d-flex justify-content-center" style={{ backgroundColor: "#f2f2f2" }}>
                            <Card className="p-2 m-4" style={{ maxWidth: "200px", backgroundColor: "#f2f2f2" }} onClick={() => navigate("/addstudent")}>
                                <CardMedia
                                    component="img"
                                    alt="Students"
                                    style={{
                                        height: "150px",
                                        width: "350px",
                                        objectFit: "cover",
                                    }}
                                    className="img-fluid"
                                    image={studentimg}
                                />
                                <div className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center" >Add Student</h2>
                                </div>
                            </Card>


                            <Card className="p-2 m-4" style={{ maxWidth: "200px", backgroundColor: "#f2f2f2" }} onClick={() => navigate("/addteacher")}>
                                <CardMedia
                                    component="img"
                                    alt="Teachers"
                                    style={{
                                        height: "150px",
                                        width: "350px",
                                        objectFit: "cover",
                                    }}
                                    className="img-fluid"
                                    image={teacherimg}
                                />
                                <div className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">Add Teacher</h2>
                                </div>
                            </Card>

                            <Card className="p-2 m-4" style={{ maxWidth: "200px", backgroundColor: "#f2f2f2" }} onClick={() => navigate("/studentlist")}>
                                <CardMedia
                                    component="img"
                                    alt="Students"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                    className="img-fluid"
                                    image={studentimg}
                                />
                                <div className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">View Students</h2>
                                </div>
                            </Card>
                            <Card className="p-2 m-4" style={{ maxWidth: "200px", backgroundColor: "#f2f2f2" }} onClick={() => navigate("/teacherlist")}>
                            <CardMedia
                                component="img"
                                alt="teachers"
                                style={{
                                    height: "150px",
                                    width: "350px",
                                    objectFit: "cover",
                                }}
                                className="img-fluid"
                                image={teacherimg}
                            />
                            <div className="p-3">
                                <h2 style={{ margin: 0 }} className="text-center">View Teachers</h2>
                            </div>
                        </Card>
                        </Paper>
                       
                    </div>


                </Container>
            </div>
        </>
    )
}