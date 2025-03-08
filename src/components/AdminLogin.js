import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        alert(userName, "Login Successfully");
        navigate("/admin");
    };

    return (
        <>
            <h1 style={{textAlign:'center'}}> Admin Login</h1>
            <div style={styles.container}>
                <form onSubmit={handleLogin} style={styles.form}>
                    <label htmlFor="fname">User Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="User Name"
                        style={styles.input}
                        onKeyUp={(e)=> setUserName(e.target.value)}
                    />

                    <label htmlFor="lname">Password</label>
                    <input
                        type="password"
                        id="lname"
                        name="lastname"
                        placeholder="Password"
                        style={styles.input}
                        onKeyUp={(e)=> setPassword(e.target.value)}
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
