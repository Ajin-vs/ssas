import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddDepartment() {
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const admin = localStorage.getItem('admin');
        if(!admin ){
            navigate('/');
        }
    },[])
    const handleAddDepartment = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        axios
        .post("http://localhost:8000/add-department",{department})
        .then(data => {
            alert("Department saved successfully")
        })
        .catch(error => console.log(error));
    };
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Department</h1>
            <div style={styles.container}>
                <form onSubmit={handleAddDepartment} style={styles.form}>

                    <label htmlFor="department">Department</label>
                    <input required type="text" id="department" name="department" style={styles.input} onChange={(e) => setDepartment(e.target.value)}/>
                    
    
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
