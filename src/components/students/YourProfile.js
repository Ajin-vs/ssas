import axios from "axios";
import { useEffect, useState } from "react"
import image from './img_avatar.png'
import { useNavigate } from "react-router-dom";
export default function YourProfile() {
    const [students, setStudents] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const studentId = localStorage.getItem('studentId');
        if(studentId == undefined || studentId == null || !studentId){
            navigate('/');
        }
        else{
            axios.get(`http://localhost:8000/student-detail/${studentId}`)
            .then(res => {
                setStudents(res.data.student)
            })
            .catch(error => console.log(error));
        }
       
    }, [])
    return (
        <>

            <h1 style={{ textAlign: 'center' }}>My Profile</h1>
            <div className="card" style={{ margin: 'auto', width: '50%', textAlign: 'center', marginTop: '100px', border: '1px ' }}>
                <img src={image} alt="Avatar" style={{ width: "25%", height: '200px', marginTop: '20px' }} />
                <div className="container">
                    <h4><b>{students.studentName}</b></h4>

                    <div style={{ textAlign: 'left', marginTop: '20px' }}>
                        <div style={{ margin: '15px' }}><strong>RegistrationNo:</strong> {students.registrationNo}</div>
                        <div style={{ margin: '15px' }}><strong>Department:</strong> {students.department}</div>
                        <div style={{ margin: '15px' }}><strong>Year:</strong> {students.year}</div>
                        <div style={{ margin: '15px' }}><strong>Email:</strong>{students.email}</div>
                        <div style={{ margin: '15px' }}><strong>DOB:</strong>{students.dob}</div>

                    </div>
                </div>
            </div>
        </>
    )
}