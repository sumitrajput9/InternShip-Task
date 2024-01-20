import axios from "axios";

export function AdminSigin(data)
{
    return axios.post("http://localhost:6700/login",data)
}
export function getSchoolData()
{
    return axios.get("http://localhost:6700/");
}
export function deleteStudent(id,obj)
{
    return axios.delete(`http://localhost:6700/delete/student/${id}/${obj}`);

}
export function deleteTeacher(id,obj)
{
    return axios.delete(`http://localhost:6700/delete/teacher/${id}/${obj}`);

}
export function saveStudent(data)
{
    return axios.post("http://localhost:6700/save/student",data)
}
export function updateSchoolToStudent(id,obj)
{
    return axios.put(`http://localhost:6700/update/school/student/${id}/${obj}`)
}
export function saveTeacher(data)
{
    return axios.post("http://localhost:6700/save/teachers",data)
}
export function updateSchoolToTeacher(id,obj)
{
    return axios.put(`http://localhost:6700/update/school/teacher/${id}/${obj}`)
}