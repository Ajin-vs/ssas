import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
    const navigate = useNavigate();
    const [regNumber, setRegNumber] = useState('');
    const [dob, setDob] = useState('');
    const handleLogin = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        axios
            .post("http://localhost:8000/student-login", { regNumber, dob })
            .then(data => {
                if(data.data.status === 'success'){
                    localStorage.setItem('studentId', data.data.data._id)
                    navigate("/student");

                }
                else{
                    alert(data.data.message)
                }
            })
            .catch(error => console.log(error));
    };
    return (
        <>
            <h1 style={{ textAlign: 'center' }}> Student Login</h1>
            <div style={styles.container}>
                <form onSubmit={handleLogin} style={styles.form}>
                    <label htmlFor="fname">Registration Number</label>
                    <input
                        required
                        type="number"
                        id="rNo"
                        name="rNo"
                        placeholder="Registration Number"
                        style={styles.input}
                        onKeyUp={(e) => setRegNumber(e.target.value)}
                    />

                    <label htmlFor="lname">DOB</label>
                    <input
                        required
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="DOB"
                        style={styles.input}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    {/* <label htmlFor="country">Country</label>
                    <select id="country" name="country" style={styles.input}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select> */}

                    <input type="submit" value="Login" style={styles.submit} />
                </form>
            </div>
        </>
    )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Half the viewport height
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
