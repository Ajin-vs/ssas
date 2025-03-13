import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function StudentsDetail() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const admin = localStorage.getItem('admin');
        if(!admin ){
            navigate('/');
        }else{
            axios
            .get("http://localhost:8000/students",)
            .then(res => {
                setStudents(res.data.result)
            })
            .catch(error => console.log(error));
        }
       
    }, []);
    const handleDelete =(studentId)=>{
        axios.delete(`http://localhost:8000/${studentId}`)
        .then(res => {
           alert("Student Deleted")
        })
        .catch(error => console.log(error));
    }
    return (
        <div style={{margin: '20px', marginTop: '40px'}}>
            <h1 style={{ textAlign: 'center' }}>Students Details</h1>
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Registration Number</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Email</th>
                    <th>DOB</th>
                    {/* <th></th> */}
                </tr>
                {
                    students.map(student => {
                        return <tr>
                            <td>{student.studentName}</td>
                            <td>{student.registrationNo}</td>
                            <td>{student.department}</td>
                            <td>{student.year}</td>
                            <td>{student.email}</td>
                            <td>{student.dob}</td>
                            {/* <td style={{cursor: 'pointer'}} onClick={(e)=>handleDelete(student._id)}>🗑️</td> */}
                        </tr>
                    })

                }

            </table>

        </div>
    )
}