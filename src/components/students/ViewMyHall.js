import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ViewMyHall() {
    const [students, setStudents] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const studentId = localStorage.getItem('studentId');

        if(studentId == undefined || studentId == null || !studentId){
            navigate('/');
        }
        else{
            axios.get(`http://localhost:8000/student-hall/${studentId}`)
            .then(res => {
                setStudents(res.data.student)
            })
            .catch(error => console.log(error));
        }
       
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>My Hall Details</h1>
            <div className="card" style={{ margin: 'auto', textAlign: 'center', marginTop: '100px', border: '1px ' }}>

                <div className="container">
                    <div style={{ textAlign: 'left', marginTop: '20px' }}>
                        <div style={{ margin: '15px' }}><strong>RegistrationNo:</strong> {students.registrationNo}</div>
                        <div style={{ margin: '15px' }}><strong>BlockName:</strong> {students.blockName}</div>
                        <div style={{ margin: '15px' }}><strong>Floor:</strong> {students.floor}</div>
                        <div style={{ margin: '15px' }}><strong>Hall Name:</strong>{students.hallName}</div>
                        <div style={{ margin: '15px' }}><strong>Seat Number:</strong>{students.seatNumber}</div>

                    </div>
                </div>
            </div>
        </>

    )
}