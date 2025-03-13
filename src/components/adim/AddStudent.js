import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function AddStudent() {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [department, setDepartment] = useState(null);
    const [year, setYear] = useState(null);
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState();
    useEffect(()=>{
        const admin = localStorage.getItem('admin');
        if(!admin ){
            navigate('/');
        }else{
            axios
            .get("http://localhost:8000/departments")
            .then(res => {
                setDepartments(res.data.result);
            })
            .catch(error => console.log(error));
        }
       
    },[]);

    const handleAddStudents =  (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        if(year === null ){
            alert("Year cannot be null")
        }
        else if(department === null ){
            alert("department cannot be null")
        }else{
            axios
            .post("http://localhost:8000/add-student",{studentName,registrationNo,department,year,email,dob})
            .then(data => {
                alert("Student Saved")
            })
            .catch(error => console.log(error));
        }
       
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Student Details</h1>
            <div style={styles.container}>
                <form  style={styles.form} onSubmit={handleAddStudents}>
                    <label htmlFor="lname">Registration No</label>
                    <input
                        required
                        type="number"
                        id="lname"
                        name="lastname"
                        placeholder="Registration No"
                        style={styles.input}
                        onKeyUp={(e) => setRegistrationNo(e.target.value)}
                    />
                    <label htmlFor="fname">Student Name</label>
                    <input
                        required
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Student Name"
                        style={styles.input}
                        onKeyUp={(e) => setStudentName(e.target.value)}
                    />

                    <label htmlFor="department">Department</label>
                    <select  id="department" name="department" style={styles.input} onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="null">--</option>
                        {
                            departments.map((res)=>{
                                return  <option value={res.department}>{res.department}</option>
                            })
                        }
                    </select>
                    <label htmlFor="year">Year</label>
                    <select id="year" name="year" style={styles.input} onChange={(e) => {setYear(e.target.value)}} required>
                        <option value="null">--</option>
                        <option value='1'>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label htmlFor="lname">Email</label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        style={styles.input}
                        onKeyUp={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="lname">Date Of Birth</label>
                    <input
                        required
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="DOB"
                        style={styles.input}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <button  style={styles.submit} type="submit" > Submit </button>
                </form>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh", // Half the viewport height
    },
    form: {
        width: "400px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    input: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },
    submit: {
        width: "100%",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    submitHover: {
        backgroundColor: "#45a049",
    },
};
