import './App.css';
import { NavigationBar } from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { StudentList } from './Components/StudentList';
import { TeacherList } from './Components/TeacherList';
import { AdminLogin } from './Components/AdminLogin';
import { AddStudent } from './Components/AddStudent';
import { AddTeacher } from './Components/AddTeacherData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studentlist' element={<StudentList/>}/>
          <Route path='/teacherlist' element={<TeacherList/>}/>
          <Route path='/login' element={<AdminLogin/>}/>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/addteacher' element={<AddTeacher/>}/>
         </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
