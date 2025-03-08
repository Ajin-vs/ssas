import { useState } from "react";

export default function AddDepartment() {
    const handleAddDepartment = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
    };
    const [department, setDepartment] = useState('');
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Department</h1>
            <div style={styles.container}>
                <form onSubmit={handleAddDepartment} style={styles.form}>

                    <label htmlFor="department">Department</label>
                    <select id="department" name="department" style={styles.input} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="australia">Physics</option>
                        <option value="canada">Chemistry</option>
                        <option value="usa">Maths</option>
                    </select>
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
        height: "40vh", // Half the viewport height
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
