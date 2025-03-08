import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function AddStudent() {
    const navigate = useNavigate();
    const [studentName, setStudentName] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const handleAddStudents = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        navigate("/admin");
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Student Details</h1>
            <div style={styles.container}>
                <form onSubmit={handleAddStudents} style={styles.form}>
                    <label htmlFor="lname">Registration No</label>
                    <input
                        type="number"
                        id="lname"
                        name="lastname"
                        placeholder="Registration No"
                        style={styles.input}
                        onKeyUp={(e) => setRegistrationNo(e.target.value)}
                    />
                    <label htmlFor="fname">Student Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Student Name"
                        style={styles.input}
                        onKeyUp={(e) => setStudentName(e.target.value)}
                    />

                    <label htmlFor="department">Department</label>
                    <select id="department" name="department" style={styles.input} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="australia">Physics</option>
                        <option value="canada">Chemistry</option>
                        <option value="usa">Maths</option>
                    </select>
                    <label htmlFor="year">Year</label>
                    <select id="year" name="year" style={styles.input} onChange={(e) => setYear(e.target.value)}>
                        <option value="australia">1</option>
                        <option value="canada">2</option>
                        <option value="usa">3</option>
                    </select>
                    <label htmlFor="lname">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        style={styles.input}
                        onKeyUp={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="lname">Date Of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="DOB"
                        style={styles.input}
                        onKeyUp={(e) => setDob(e.target.value)}
                    />
                    <input type="submit" value="Submit" style={styles.submit} />
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
