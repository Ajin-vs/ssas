import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeatArrangmnet(){
     const [seats, setSeats] = useState([]);
     const navigate = useNavigate();

        useEffect(() => {
            const admin = localStorage.getItem('admin');
            if(!admin ){
                navigate('/');
            }else{
                axios
                .get("http://localhost:8000/view-seat-allocation",)
                .then(res => {
                    setSeats(res.data.seats)
                })
                .catch(error => console.log(error));
            }
          
        }, [])
    return (
        <div style={{margin: '20px', marginTop: '40px'}}>
        <h1 style={{ textAlign: 'center' }}>Seat Arrangement</h1>

        <table>
            <tr>
                <th>Student Name</th>
                <th>Registration Number</th>
                <th>Department</th>
                <th>Year</th>
                <th>Seat No</th>
                <th>Floor</th>
                <th>Block</th>
                <th>Hall Name</th>
            </tr>
            {
                seats.map(seat => {
                    return <tr>
                        <td>{seat.studentName}</td>
                        <td>{seat.registrationNo}</td>
                        <td>{seat.department}</td>
                        <td>{seat.year}</td>
                        <td>{seat.seatNumber}</td>
                        <td>{seat.floor}</td>
                        <td>{seat.blockName}</td>
                        <td>{seat.hallName}</td>
                    </tr>
                })

            }

        </table>

    </div>
    )
}

