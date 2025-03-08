import { useState } from "react";

export default function AddExamHall() {
    const [hallName, setHallName] = useState('');
    const [blockName, setBlockName] = useState('');
    const [floor, setFloor] = useState('');
    const [seatCapacity, setSeatCapacity] = useState();
    const handleAddExamHall = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
    };
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Exam Hall</h1>
            <div style={styles.container}>
                <form onSubmit={handleAddExamHall} style={styles.form}>
                    <label htmlFor="hallName">Hall Name</label>
                    <input
                        type="text"
                        id="hallName"
                        name="hallName"
                        placeholder="Hall Name"
                        style={styles.input}
                        onKeyUp={(e) => setHallName(e.target.value)}
                    />
                    <label htmlFor="blockName">Block Name</label>
                    <input
                        type="text"
                        id="blockName"
                        name="blockName"
                        placeholder="Block Name"
                        style={styles.input}
                        onKeyUp={(e) => setBlockName(e.target.value)}
                    />

                    <label htmlFor="floor">Floor</label>
                    <input
                        type="text"
                        id="floor"
                        name="floor"
                        placeholder="Floor"
                        style={styles.input}
                        onKeyUp={(e) => setFloor(e.target.value)}
                    />
                      <label htmlFor="seatCapacity">Seat Capacity</label>
                    <input
                        type="number"
                        id="seatCapacity"
                        name="seatCapacity"
                        placeholder="Seat Capacity"
                        style={styles.input}
                        onKeyUp={(e) => setSeatCapacity(e.target.value)}
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
        height: "70vh", // Half the viewport height
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
