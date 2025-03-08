import { useState } from "react";

export default function SeatAllocation() {
    const [semester, setSemester] = useState('');
    const [date, setDate] = useState();
    const handleAutoSeat = (event) => {

    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Auto Seating Allotment</h1>
            <div style={styles.container}>
                <form onSubmit={handleAutoSeat} style={styles.form}>
                    <label htmlFor="hallName">Semester</label>
                    <input
                        type="text"
                        id="semester"
                        name="semester"
                        placeholder="Semester"
                        style={styles.input}
                        onKeyUp={(e) => setSemester(e.target.value)}
                    />
                    <label htmlFor="lname">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Date"
                        style={styles.input}
                        onKeyUp={(e) => setDate(e.target.value)}
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
