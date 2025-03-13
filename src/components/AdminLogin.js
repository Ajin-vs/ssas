import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        axios
            .post("http://localhost:8000/admin-login", { userName, password })
            .then(data => {
                if (data.data.status === 'success') {
                    localStorage.setItem('admin', true);
                    navigate("/admin");
                } else {
                    alert(data.data.message)
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}> Admin Login</h1>
            <div style={styles.container}>
                <form style={styles.form} onSubmit={handleLogin}>
                    <label htmlFor="fname">User Name</label>
                    <input
                        required
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="User Name"
                        style={styles.input}
                        onKeyUp={(e) => setUserName(e.target.value)}
                    />

                    <label htmlFor="lname">Password</label>
                    <input
                        required
                        type="password"
                        id="lname"
                        name="lastname"
                        placeholder="Password"
                        style={styles.input}
                        onKeyUp={(e) => setPassword(e.target.value)}
                    />

                    {/* <label htmlFor="country">Country</label>
                    <select id="country" name="country" style={styles.input}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select> */}

                    <button style={styles.submit} type="submit"  >Submit</button>
                </form>
            </div>
        </>
    );
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
