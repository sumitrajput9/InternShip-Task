
import { useState } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "./Slice/schoolSlice";
export function NavigationBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const isLoggedin = useSelector((state)=>state.schoolData.isLogeddin);
  console.log(isLoggedin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  }
  return (
    <nav className="nav">
      <a href="logo" className="nav__brand">
        SCHOOL MANAGEMENT SYSTEM
      </a>
      <ul className={active}>
        <LinkContainer to="/">
          <li className="nav__item">
            <a href="home" className="nav__link">
              Home
            </a>
          </li>
        </LinkContainer>
        <LinkContainer to="/studentlist">
          <li className="nav__item">
            <a href="data" className="nav__link">
              StudentList
            </a>
          </li>
        </LinkContainer>
        <LinkContainer to="/teacherlist">
          <li className="nav__item">
            <a href="#" className="nav__link">
              TeacherList
            </a>
          </li>
        </LinkContainer>
        <li className="nav__item">
        {
            isLoggedin ? (
              <LinkContainer to="/login">
                <Button className="ms-3 btn  btn-danger" onClick={handleLogOut}>Logout</Button>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login">

                <Button className="ms-3 btn  btn-primary">Login</Button>

              </LinkContainer>
            )
          } 
        </li>
      </ul>
      <div onClick={() => {
        if (active === "nav__menu") {
          setActive("nav__menu nav__active");
        } else setActive("nav__menu");


        if (icon === "nav__toggler") {
          setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
      }} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
