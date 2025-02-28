import { useNavigate } from "react-router-dom"

export default function AddStudent(){
    const navigate = useNavigate();
    const handleLogout =() =>{
        navigate('/')
    }
    return (
        <div>
            Add Students
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}